from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('category', views.CategoryViewSet)
router.register('newsletter', views.UsersNewsletterViewSet)
router.register('annonce', views.AnnonceViewSet)
router.register('my-annonce', views.MyAnnonceViewSet)
router.register('enterprise', views.EnterpriseViewSet)
router.register('job', views.JobViewSet)
router.register('cursus', views.CursusViewSet)
router.register('campus', views.CampusViewSet)
router.register('faculty', views.FacultyViewSet)
router.register('notification', views.NotificationViewSet)
router.register('user', views.UserViewSet)
router.register('message', views.MessageViewSet)

urlpatterns = [
    path('', include(router.urls))
]
