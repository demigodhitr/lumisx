import requests
from django.conf import settings

# Replace with your bot token
BOT_TOKEN = '8158396168:AAEJqD3w-f_UI24XG6riXsqX0QuhAcGXF6w'

def get_updates():
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/getUpdates?offset=1"
    response = requests.get(url)
    print(f"Response Status Code: {response.status_code}")  # Debug status
    print(f"Response Content: {response.text}")  # Debug raw content


    if response.status_code == 200:
        updates = response.json()
        for update in updates.get("result", []):
            if "message" in update:
                user_id = update["message"]["chat"]["id"]
                user_name = update["message"]["chat"].get("username", "No username")
                print(f"Chat ID: {user_id}, Username: {user_name}")
    else:
        print("Failed to fetch updates:", response.text)

if __name__ == "__main__":
    get_updates()
