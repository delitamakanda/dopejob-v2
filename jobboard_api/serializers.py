from rest_framework import serializers
from .models import Annonce, Enterprise, Cursus, Job, Campus, Faculty, Notification, Message, User, UsersNewsletter, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class AnnonceSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Annonce
        fields = ('id', 'title', 'slug', 'enterprise', 'created_date', 'published_date', 'is_available', 'localization', 'contact_name',
                  'contact_email', 'url_redirection', 'language', 'job_offer', 'job_fields', 'job_time', 'job_description', 'requirements', 'category', 'position_salary')


class UsersNewsletterSerializer(serializers.Serializer):

    class Meta:
        model = UsersNewsletter
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ('following',)


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
        fields = '__all__'



class CursusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cursus
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = '__all__'

