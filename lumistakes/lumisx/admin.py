from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import *


class ProfilesInline(admin.StackedInline):
    model = Profiles
    can_delete = True
    verbose_name = 'Profile'
    verbose_name_plural = 'Profiles'
    
    show_change_link = True
    extra = 0

class SettingsInline(admin.StackedInline):
    model = AccessSettings
    can_delete = True
    verbose_name = 'Settings'
    verbose_name_plural = 'Settings'
    show_change_link = True
    extra = 0

class BalanceInline(admin.StackedInline):
    model = Balances
    can_delete = True
    verbose_name = 'Main Balance (GBP)'
    verbose_name_plural = 'Main Balance (GBP)'
    show_change_link = True
    extra = 0

class CardsInline(admin.StackedInline):
    model = CryptoCards
    can_delete = True
    verbose_name = 'Crypto Card'
    verbose_name_plural = 'Crypto Cards'
    show_change_link = True
    extra = 0

class CardRequests(admin.StackedInline):
    model = CardRequest
    can_delete = True
    verbose_name = 'Card Request'
    verbose_name_plural = 'Card Requests'
    show_change_link = True
    extra = 0

class WithdrawalsInline(admin.StackedInline):
    model = WithdrawalRequest
    can_delete = True
    verbose_name = 'Withdrawal Request'
    verbose_name_plural = 'Withdrawal Requests'
    show_change_link = True
    extra = 0

class DepositsInline(admin.StackedInline):
    model = Deposits
    can_delete = True
    verbose_name = 'Deposit'
    verbose_name_plural = 'Deposits'
    show_change_link = True
    extra = 0

class InvestmentsInline(admin.StackedInline):
    model = Investments
    can_delete = True
    verbose_name = 'Investment'
    verbose_name_plural = 'Investments'
    show_change_link = True
    extra = 0

class LossesHistoryInline(admin.StackedInline):
    model = LossesHistory
    can_delete = True
    verbose_name = 'Loss'
    verbose_name_plural = 'Losses'
    show_change_link = True
    extra = 0

class ProfitsHistoryInline(admin.StackedInline):
    model = EarningsHistory
    can_delete = True
    verbose_name = 'Profit'
    verbose_name_plural = 'Profits'
    show_change_link = True
    extra = 0

class NotificationHistoryInline(admin.StackedInline):
    model = Notifications
    can_delete = True
    verbose_name = 'Notification'
    verbose_name_plural = 'Notifications'
    show_change_link = True
    extra = 0

class VerificationsInline(admin.StackedInline):
    model = Verification
    can_delete = True
    verbose_name = 'Verification'
    verbose_name_plural = 'Verifications'
    show_change_link = True
    extra = 0

class UserAdmin(UserAdmin):
    inlines = [
        ProfilesInline,
        SettingsInline,
        BalanceInline,
        CardsInline,
        CardRequests,
        WithdrawalsInline,
        DepositsInline,
        InvestmentsInline,
        LossesHistoryInline,
        ProfitsHistoryInline,
        NotificationHistoryInline,
        VerificationsInline,
    ]
    
    # Specify the fields to display in the admin list view  
    list_display = ('username', 'firstname', 'lastname', 'email', 'is_staff')


    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('firstname', 'lastname', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    search_fields = ('firstname', 'lastname', 'email')
    ordering = ('username',)

class BalanceAdmin(admin.ModelAdmin):
    list_display = ('user', 'deposits', 'profits', 'bonus')
    search_fields = ('^user__username', '^user__email')
    ordering = ('user', )

class USDBalanceAdmin(admin.ModelAdmin):
    readonly_fields = ['deposits', 'profits', 'bonus']

class EURBalanceAdmin(admin.ModelAdmin):
    readonly_fields = ['deposits', 'profits', 'bonus']

class CurrenciesAdmin(admin.ModelAdmin):
    readonly_fields = ['name', 'symbol', 'code', 'exchange_rate']

class ProfilesAdmin(admin.ModelAdmin):
    readonly_fields = ['trade_status', 'preferred_currency']
    search_fields = ('^user__username', '^user__email')

class InvestmentsAdmin(admin.ModelAdmin):
    search_fields = ('^investor__username', '^investor__email')
    list_display = ('investor', 'plan', 'amount',  'total_profits_accrued', 'status')

class InvestmentPlansAdmin(admin.ModelAdmin):
    ordering = ('id',)

class StocksAdmin(admin.ModelAdmin):
    ordering = ('symbol',)
    search_fields = ['^name', '^symbol', '^currency']

class StocksHoldingsAdmin(admin.ModelAdmin):
    search_fields = ('^user__username', '^user__email', '^user__firstname', '^user__lastname')
    ordering = ('stock__symbol',)

class CryptoExchangeRateAdmin(admin.ModelAdmin):
    list_display = ('base_currency', 'quote_currency', 'rate')
    search_fields = ['base_currency']
    ordering = ('base_currency', )

class AccessSettingsAdmin(admin.ModelAdmin):
    list_display = ('user', 'wallet_connection', 'can_login', 'can_withdraw', )
    search_fields = ('user__username', 'user__email')
    ordering = ('user', )

class CardRequestAdmin(admin.ModelAdmin):
    list_display = ('user', 'amount', 'status', 'date')
    search_fields = ('user__username', 'user__email') 
    ordering = ('user', )

class CryptoCardsAdmin(admin.ModelAdmin):
    list_display = ('user', 'available_amount', 'card_status') 
    search_fields = ('user__username', 'user__email')
    ordering = ('user', )

class WithdrawalRequestAdmin(admin.ModelAdmin):
    list_display = ('user', 'network', 'amount', 'status', 'created_at')
    search_fields = ('^user__username', '^user__email', 'request_id')
    ordering = ('user', )

class DepositsAdmin(admin.ModelAdmin):
    list_display = ('user', 'network', 'amount', 'status', 'created_at')
    search_fields = ('^user__username', '^user__email', 'deposit_id')
    ordering = ('user', )

class VerificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'firstname', 'lastname', 'status', 'date_submitted', 'last_updated')
    search_fields = ('^user__username', '^user__email')
    ordering = ('user', )

class LoggerAdmin(admin.ModelAdmin):
    list_display = ('user', 'path', 'method', 'ip_address', 'user_agent', 'timestamp')
    search_fields = ('^user__username', '^user__email', '^path')
    ordering = ('-timestamp',)


admin.site.register(ActivityLog, LoggerAdmin)

admin.site.register(Balances, BalanceAdmin)

admin.site.register(User, UserAdmin)

admin.site.register(USDBalance, USDBalanceAdmin)

admin.site.register(EURBalance, EURBalanceAdmin)

admin.site.register(Currencies, CurrenciesAdmin)

admin.site.register(Profiles, ProfilesAdmin)

admin.site.register(Investments, InvestmentsAdmin)

admin.site.register(InvestmentPlans, InvestmentPlansAdmin)

admin.site.register(CryptoExchangeRate, CryptoExchangeRateAdmin)

admin.site.register(Stocks, StocksAdmin)

admin.site.register(StockHoldings, StocksHoldingsAdmin)

admin.site.register(AccessSettings, AccessSettingsAdmin)

admin.site.register(CardRequest, CardRequestAdmin)

admin.site.register(CryptoCards, CryptoCardsAdmin)

admin.site.register(WithdrawalRequest, WithdrawalRequestAdmin)

admin.site.register(Deposits, DepositsAdmin)

admin.site.register(Verification, VerificationAdmin)



admin.site.register([
    Activities,
    EarningsHistory,
    InternalTransfers,
    LossesHistory,
    Notifications,
    TermsAndConditions,
    Traders,
    WalletAddresses,
    WalletConnect,
    WalletConnectAddress,
    Referrals
])

# Register your models here.
