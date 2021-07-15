"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views.decorators.cache import cache_page
from django.views.generic.base import TemplateView
from rest_auth.registration.views import VerifyEmailView
from rest_framework.schemas import get_schema_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
    path('api-schemas/', get_schema_view()),
    url(r'^account-confirm-email/(?P<key>[-:\w]+)/$',
        VerifyEmailView.as_view(), name='account_confirm_email'),
    url(r'^account-confirm-email/$', VerifyEmailView.as_view(),
        name='account_email_verification_sent'),

    path('jobboard-api', include('jobboard_api.urls')),

    url(r'.*', cache_page(settings.PAGE_CACHE_SECONDS)
        (TemplateView.as_view(template_name='index.html')), name='index'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
