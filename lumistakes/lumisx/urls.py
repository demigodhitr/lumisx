from django.urls import path
from .views import *


urlpatterns = [
    path('', app, name='home'),
    path('landing', app_landing, name='landing'),
    path('menu', app_menu, name='menu'),
    path('components', app_components, name='components'), 
    path('cards', app_cards, name='cards'),
    path('contact', app_contact, name='contact'),
    path('faq', app_faq, name='faqs'),
    path('signin', signin, name='signin'),
    path('signup', signup, name='signup'),
    path('signout', signout, name='logout'),
    path('notifications', app_notifications, name='notifications'),
    path('notification-details/<int:id>', app_notification_detail, name='notification-details'),
    path('pages', app_pages, name='pages'),
    path('savings', app_savings, name='savings'),
    path('my-holdings', app_stock_list, name='stock-list'),
    path('settings', app_settings, name='settings'),
    path('email-verification', app_email_verification, name='email-verification'),
    path('get-code', get_new_code, name='get-code'),
    path('verify-code', verify_code, name='verify-code'),
    path('verify_account', verify_account_code, name='verify_account'),

    path('transactions', transactions, name='transactions'),
    path('terms-of-service', terms_and_conditions, name='terms-of-service'),
    path('overview/<str:activity_type>/<int:id>', app_transaction_detail, name='transaction-details'),
    # deposit
    path('deposit-verification', app_deposit_verification, name='deposit-verification'),
    path('deposit-complete', app_deposit_complete, name='deposit-complete'),
    # withdrawal
    path('transaction-verification', app_transaction_verification, name='transaction-verification'),
    path('transaction-complete', app_transaction_complete, name='transaction-complete'),

    # transfer.
    path('transfer-verification', transfer_verification, name='transfer-verification'),
    path('transfer-complete', transfer_complete, name='transfer-complete'),

    # investment

    path('investment-verification', investment_verification, name='investment-verification'),
    path('investment-complete', investment_complete, name='investment-complete'),

    # stocks and cryptos 
    path('crypto-coin-detail', crypto_coin_detail, name='crypto-coin-detail'),
    path('crypto-exchange', crypto_exchange, name='exchange'),
    path('crypto-index', crypto_index, name='crypto-index'),
    path('portfolio', portfolio, name='portfolio'),
    path('stock-detail/<int:id>', stock_detail, name='stock_detail'),
    path('confirm-stock-purchase', confirm_stock_purchase, name='confirm-stock-purchase'),
    path('stock-purchase-complete', stock_purchase_complete, name='stock_purchase_complete'),
    path('confirm-sell-stock', confirm_sell_stock, name='confirm-sell-stock'),
    path('stock-sell-complete', stock_sell_complete, name='stock_sell_complete'),
    path('crypto-transactions', crypto_transactions, name='crypto-transactions'),

    path('invitee/premium/<str:referral_code>', referral_link, name='referral_link'),



    # profile verification.
    path('verification', profile_verification, name='verification'),

    # APIs
    path('api/checkbalance', checkbalance, name='checkbalance'),
    path('api/validate-recipient', validate_recipient, name='validate-recipient'),
    path('api/authorize', authorize, name='authorize'),
    path('api/withdraw', withdraw, name='withdraw'),
    path('api/validate-recipient', validate_recipient, name='validate_recipient'),
    path('api/transfer', transfer_balance, name='transfer'),
    path('api/checkplan', checkplan, name='checkplan'),
    path('api/invest', invest, name='invest'),
    path('api/upgrade', upgrade, name='upgrade'),
    path('api/verify-eth/<str:txid>/<str:expected_address>/', check_eth_transaction, name='verify_eth_transaction'),
    path('api/deposit', deposit, name='deposit'),
    path('api/confirm-deposit', confirm_deposit, name='confirm-deposit'),
    # Card request, funding and defunding.
    path('api/getcard', get_card, name='getcard'),
    path('api/fundcard', fund_card, name='fundcard'),
    path('api/defundcard', defund_card, name='defundcard'),
    path('api/togglecard', toggle_card, name='togglecard'),
    path('api/updatepassword', update_password, name='update_password'),
    path('api/delete-notification/<int:id>/', delete_notification, name='delete_notification'),
    path('api/query-stocks/<str:keyword>', query_stocks, name='query_stocks'),
    path('api/connect-wallet/', connect_wallet, name='connect_wallet'),
    path('api/notify-admin/', notify_admin, name='notify_admin'),
    path('api/calculate-total/', calculate_total, name='calculate_total'),

    path('api/verify_token/<str:token>/', verify_token, name='verify_token'),
    path('api/getcountry/<str:country>/', getcountry, name='getcountry'),





    # PASSWORD RESET.
    #Password Reset urls.
    path('reset_password/', password_reset, name='password_reset'),
    path('reset_password_done/', password_reset_done, name='password_reset_done'),
    path('reset/<uidb64>/<token>/', password_reset_confirm, name='password_reset_confirm'),
    path('reset_password_complete/', password_reset_complete, name='password_reset_complete'),
]
