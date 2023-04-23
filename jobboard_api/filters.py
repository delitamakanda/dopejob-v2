from django import forms
from .models import Annonce
import django_filters
from django_filters import rest_framework as filters


class StringInFilter(filters.BaseInFilter):
    pass

class AnnonceV2Filter(filters.FilterSet):
    job_offer_in = StringInFilter(field_name='job_offer', lookup_expr='in', label='Types de contrats',)
    job_fields_in = StringInFilter(field_name='job_fields', lookup_expr='in', label='Domaines d\'emplois',)
    job_time_in = StringInFilter(field_name='job_time', lookup_expr='in', label='Temps de travail',)
    language_in = StringInFilter(field_name='language', lookup_expr='in', label='Languages',)
    localization = filters.CharFilter(lookup_expr='icontains', label='', widget=forms.TextInput(attrs={'placeholder': 'Recherchez une ville'}))

    class Meta:
        model = Annonce
        fields = ['job_offer', 'job_fields', 'job_time', 'language', 'localization',]


class AnnonceFilter(django_filters.FilterSet):
    localization = django_filters.CharFilter(lookup_expr='icontains', label='', widget=forms.TextInput(attrs={'placeholder': 'Recherchez une ville'}))

    class Meta:
        model = Annonce
        fields = ['localization', 'job_offer', 'job_fields', 'job_time']
