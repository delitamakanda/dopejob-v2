from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, permissions, request, response

from .models import Category, Annonce, Enterprise, Cursus, Job, Cursus, Campus, Faculty, Notification, Message, User, UsersNewsletter
from .serializers import CategorySerializer, AnnonceSerializer, EnterpriseSerializer, UserSerializer, MessageSerializer, NotificationSerializer, FacultySerializer, CampusSerializer, CursusSerializer, JobSerializer, UsersNewsletterSerializer
from .filters import AnnonceFilter


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
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filterset_class = AnnonceFilter
    search_fields = ['^title', 'language',
                     '^job_description', '^requirements', 'enterprise']
    lookup_field = 'slug'
    pagination_class = None  # FIX
    permission_classes = (permissions.AllowAny,)


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

