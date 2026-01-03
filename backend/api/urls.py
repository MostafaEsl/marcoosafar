from django.urls import path

from . import views

urlpatterns = [
    path("overview/", views.site_overview, name="site_overview"),
]
