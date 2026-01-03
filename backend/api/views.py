from django.http import JsonResponse


def site_overview(request):
    return JsonResponse(
        {
            "brand": "Marco Osafar",
            "tagline": "Designing thoughtful digital experiences.",
            "services": [
                "Product strategy",
                "UX/UI design",
                "Frontend development",
            ],
            "contact": {
                "email": "hello@marcoosafar.com",
                "location": "Remote · Worldwide",
            },
        }
    )
