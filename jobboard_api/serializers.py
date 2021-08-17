from django.contrib.contenttypes import fields
from django.db import models
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.serializers import UserDetailsSerializer
from .models import Annonce, Enterprise, Student, Employee, Cursus, Job, Campus, Faculty, Notification, Message, User


class AnnonceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Annonce
        fields = ('id', 'title', 'slug', 'enterprise', 'created_date', 'published_date', 'is_available', 'localization', 'contact_name',
                  'contact_email', 'url_redirection', 'language', 'job_offer', 'job_fields', 'job_time', 'job_description', 'requirements',)


class UserSerializer(UserDetailsSerializer, serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
        write_only_fields = ('password',)


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = '__all__'


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = '__all__'


class FacultySerializer(serializers.ModelSerializer):

    class Meta:
        model = Faculty
        fields = '__all__'


class CampusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campus
        fields = '__all__'


class EnterpriseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Enterprise
        exclude = ('network', 'active', 'staff',
                   'admin', 'last_login', 'password',)


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        exclude = ('network', 'active', 'staff',
                   'admin', 'last_login', 'password',)


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        exclude = ('network', 'active', 'staff',
                   'admin', 'last_login', 'password',)


class CursusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cursus
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = '__all__'


class UserRegisterSerializer(RegisterSerializer, UserSerializer):
    user_type = serializers.CharField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    home_phone_number = serializers.CharField(required=True)
    mobile_phone_number = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    birth_date = serializers.CharField(required=True)

    def get_cleaned_data(self):
        super(UserRegisterSerializer, self).get_cleaned_data()
        return {
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'user_type': self.validated_data.get('user_type', ''),
            'email': self.validated_data.get('email', ''),
            'home_phone_number': self.validated_data.get('home_phone_number', ''),
            'birth_date': self.validated_data.get('birth_date', ''),
            'mobile_phone_number': self.validated_data.get('mobile_phone_number', ''),
        }

    def save(self, request):
        user = super().save(request)
        user.home_phone_number = self.data.get('home_phone_number')
        user.mobile_phone_number = self.data.get('mobile_phone_number')
        user.birth_date = self.data.get('birth_date')
        user.user_type = self.data.get('user_type')
        user.save()
        return user
