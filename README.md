# 🌐 Lumis X

Lumis X is a full-stack simulation of a futuristic brokerage and investment platform — with enhanced features, an improved interface, and wallet integrations.  
Built with **Django**, **HTML/JS**, **Tailwind CSS**, and **React WalletConnect**, Lumis X demonstrates the end-to-end flow of investment management, crypto-to-fiat handling, user wallets, and dynamic admin control.

---

## ⚠️ Disclaimer

> **Important:**  
> Lumis X is a **simulated platform for demonstration purposes only.**  
> Most logic (e.g., crypto conversions, trades, and user balances) are mock implementations and **should not be used in real financial environments without modification.**  
> Though proper validations and real free APIs are implemented, For rea world use case, modifications must be made to various API logics and financial security practices must be heightened for production.

---

## 📁 Project Structure

```bash
lumistakes/
├── lumisx/               # Core app logic
├── HomeApp/              # Static pages, landing, home
├── WalletConnect/        # React app integration
├── templates/            # Custom admin HTML templates
├── static/               # Tailwind CSS, JS
├── manage.py             # DO NOT MODIFY WITHOUT EXTENSIVE KNOWLEDGE OF DJANGO
```

---

## 🚀 Features

- 🔐 User registration & authentication  
- 📈 Simulated stock & crypto holdings  
- ⏱️ Time-locked investments with real-time countdown  
- 💸 Multi-wallet system (deposit, profit, bonus)  
- ↺ Crypto ↔ Fiat conversions (mock logic)  
- 🛤️ Admin notifications via Telegram (configurable)  
- ⚙️ React-based WalletConnect embedded via Django  
- 🧠 Chatbot integration from template data (experimental)  
- 📊 Admin dashboards (customized)  

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/demigodhitr/lumisx.git
```

### 2. Create & activate virtual environment

```bash
python -m venv library
source library/bin/activate      # On Windows: library\Scripts\activate
```

### 3. Install backend dependencies

```bash
cd lumistakes
pip install -r requirements.txt
```

### 4. Install and build frontend (WalletConnect)

```bash
cd lumisx
cd WalletConnect/app
npm install
npm run build
```

This creates the production React build which Django loads using `django-webpack-loader`.

---

## 🔐 Required Environment Variables

Create a `.env` file in the project root (same folder as manage.py) and include the following:

```env

# exchange rate API key (get from https://www.exchangerate-api.com)
    EXCHANGE_KEY=your_api_key_here


# polygon api key ( for fetching stocks and stocks market capitalization, get from https://polygon.io)
    POLYGON_API_KEY=your_api_key_here


# GOOGLE CAPTCHA SECRET (for verifying captcha challenge score on the server, get from https://cloud.google.com/security/products/recaptcha)
    G_RECAPTCHA_SECRET=your_recaptch_secret_here
    G_RECAPTCHA_SITE_KEY=your_recaptcha_key_here



# finnhub api (for fetching stocks latest prices periodically, get from https://finnhub.io) 
    FINNHUB_API_KEY=your_api_key_here



# telegram bot token (for sending notifications to admin, get from https://t.me/botfather)
    TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here



# admin telegram chat id (chat ID of notification recipient). message your telegram bot using the intended notification recipient account, then on the this app, navigate to the same directory where manage.py is (project root) then run python get_chatid.py, NOTE: ensure to replace the bot token in the chatid.py file before running this command.
    LUMISTAKES_ADMIN_CHAT_ID=your_telegram_chat_id_here



# Etherscan API key (for verifying ethereum deposits onchain before creating any db record, get from https://etherscan.io)
    ETHERSCAN_API_KEY=your_api_key_here



# Database (your MySQL/POSTGRESQL/MariaDB credentials)
    DATABASE_NAME=your_database_name
    DATABASE_USER=your_database_privileged_user_username
    DATABASE_PASSWORD=your_database_password


# Email Credentials (for sending email alerts, verification codes)
    EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST=your_email_host_here.com
    EMAIL_PORT=465
    EMAIL_USE_SSL=True
    EMAIL_USE_TLS=False
    EMAIL_HOST_USER=youremail@example.com
    EMAIL_HOST_PASSWORD=******
    DEFAULT_FROM_EMAIL=youremail@example.com
    SERVER_EMAIL=youremail@example.com

# Django Social Auth Credentials ( for seamless signup/login using google account, get from https://console.cloud.google.com)
    SOCIAL_AUTH_GOOGLE_OAUTH2_KEY=your_google_client_id_here
    SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET=your_google_client_secret_here


```



Create another .env file inside lumistakes/WalletConnect/app/

```env
  # ReOwn project ID (for walletconnect and web3 interactions, get from https://reown.com)
    REACT_APP_PROJECT_ID=your_reown_project_id_here

```

> **Note:** Don’t commit `.env` files — it should be excluded in `.gitignore`.

---

### 🔑 SECRET_KEY Management

Django’s SECRET_KEY is critical for securing sessions, CSRF protection, and token signing. It should:

+ Be a long, random string (typically 50+ characters)
+ Be kept private and loaded via .env
+ Remain consistent across server restarts (unless rotating deliberately)

  ## LumisX includes a management command to generate and update .env with a fresh SECRET_KEY:
  run this while you're in the app root directory. run this only once (at initial setup). you can always regenerate secret keys when needed by running this command
  ```bash
      python manage.py get_security
  ```
  **⚠️ Note**
  > Changing this key will **log out all users** and **invalidate any existing tokens** or **signed cookies**.

## 🗃️ Database Initialization 

Make migrations to the database(create database tables and columns)
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createcachetable

```

## App initialization
  this app requires some instances to be able to run, run the following command to create all neccesary instances before starting the server
    ```bash
    python manage.py init_app
    ```

### Create superuser (for admin access)

```bash
python manage.py createsuperuser
```

---

## 🧪 Run Locally

```bash
python manage.py runserver 0.0.0.0:8080     # or any port, e.g 8000, 1010, etc.
```

Visit: `localhost:port       e.g localhost:8080`

---

## 🌐 Deployment 

- Django fullstack apps can be deployed either via Shared hosting or VPS (Virtual Private Server)
- Ensure environment variables are set in your hosting platform
- Run collectstatic for production static files:
```bash
python manage.py collectstatic
```
- Django does not serve static and media files in production, make sure to configure your web server to serve static and media files securely in production.

---

## 🙏 Acknowledgements

- [Django](https://www.djangoproject.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React WalletConnect AppKit](https://reown.com/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- All API service providers as listed above

---

## 📩 Contact

Feel free to reach out if you’re hiring, collaborating, or vibing with the build:

- Twitter: [@demigodHITR](https://x.com/demigodHITR)
- GitHub: [demigodhitr](https://github.com/demigodhitr)
- Web: [HITR](hitr.netlify.app)
