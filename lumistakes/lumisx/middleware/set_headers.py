class CustomSecurityHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # ✅ Add only this one if it's WalletKit-related
        response["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups"

        return response
