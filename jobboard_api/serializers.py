from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import Annonce, Enterprise, Student, Employee, Cursus, Job, Campus, Faculty, Notification, Message, User


class AnnonceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Annonce
        fields = ('id', 'title', 'slug', 'enterprise', 'created_date', 'published_date', 'is_available', 'localization', 'contact_name',
                  'contact_email', 'url_redirection', 'language', 'job_offer', 'job_fields', 'job_time', 'job_description', 'requirements',)


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


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


class StudentRegisterSerializer(RegisterSerializer, StudentSerializer):
    pass


class EmployeeRegisterSerializer(RegisterSerializer, EmployeeSerializer):
    pass


class EnterpriseRegisterSerializer(RegisterSerializer, EnterpriseSerializer):
    pass
