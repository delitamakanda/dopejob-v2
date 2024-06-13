from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters_drf

from rest_framework import viewsets, filters, permissions, request, response, authentication

from .models import Category, Annonce, Enterprise, Cursus, Job, Cursus, Campus, Faculty, Notification, Message, User, UsersNewsletter
from .serializers import CategorySerializer, AnnonceSerializer, EnterpriseSerializer, UserSerializer, MessageSerializer, NotificationSerializer, FacultySerializer, CampusSerializer, CursusSerializer, JobSerializer, UsersNewsletterSerializer
from .filters import AnnonceFilter, AnnonceV2Filter


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None  # FIX
    permission_classes = (permissions.AllowAny,)


class UsersNewsletterViewSet(viewsets.ModelViewSet):
    queryset = UsersNewsletter.objects.all()
    serializer_class = UserSerializer
    pagination_class = None  # FIX


class AnnonceViewSet(viewsets.ModelViewSet):
    queryset = Annonce.objects.all().filter(is_available=True)
    serializer_class = AnnonceSerializer
    search_fields = ['title',
                     'job_description', 'requirements', 'enterprise__company_name']
    ordering_fields = ['id', 'published_date', 'updated_date']
    # filterset_class = AnnonceFilter
    filterset_class = AnnonceV2Filter
    filter_backends = (filters_drf.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    lookup_field = 'id' # slug
    pagination_class = None  # FIX
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        if self.request.user:
            return Annonce.objects.filter(enterprise__user=self.request.user)
        return Annonce.objects.all()

class JobViewSet(viewsets.ModelViewSet):

    queryset = Job.objects.all()
    serializer_class = JobSerializer
    pagination_class = None  # FIX

class CursusViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Cursus.objects.all()
    serializer_class = CursusSerializer


class CampusViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Campus.objects.all()
    serializer_class = CampusSerializer


class FacultyViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    pagination_class = None  # FIX


class NotificationViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        pk = self.kwargs.get('pk')

        if pk == "me":
            return self.request.user

        return super(UserViewSet, self).get_object()


class EnterpriseViewSet(viewsets.ModelViewSet):
    queryset = Enterprise.objects.all()
    serializer_class = EnterpriseSerializer


class MessageViewSet(viewsets.ModelViewSet):

    queryset = Message.objects.all()
    serializer_class = MessageSerializer

