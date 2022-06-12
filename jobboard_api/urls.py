from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('newsletter', views.UsersNewsletterViewSet)
router.register('annonce', views.AnnonceViewSet)
router.register('enterprise', views.EnterpriseViewSet)
router.register('job', views.JobViewSet)
router.register('cursus', views.CursusViewSet)
router.register('campus', views.CampusViewSet)
router.register('faculty', views.FacultyViewSet)
router.register('notification', views.NotificationViewSet)
router.register('user', views.UserViewSet)
router.register('message', views.MessageViewSet)

urlpatterns = [
    path('user-registration', views.UserRegistrationView.as_view(),
         name="user_registration"),
    path('', include(router.urls))
]
