import logo from './logo.svg';
import './App.css';
import ConnectWallet from './ConnectWallet';

import { WagmiProvider } from 'wagmi';
import { createAppKit } from '@reown/appkit/react';
import { arbitrum, mainnet } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const projectId = process.env.REACT_APP_PROJECT_ID || '';
const queryClient = new QueryClient();

const networks = [mainnet, arbitrum]

// const metadata = {
//   name: 'Nexa',
//   description: 'Seamless wallet connection, investment brokerage platform',
//   url: 'https://nexauniversal.com',
// };

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
  autoConnect: true,

});
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  // metadata,
  features: {
    analytics: true,
    autoConnect: true,
  }
});

export default function App() {
  return (
    <>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            <ConnectWallet/>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

