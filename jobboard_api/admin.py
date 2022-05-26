from django.contrib import admin
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Annonce, User, Message, Faculty, Enterprise, Campus, Job, Cursus, Notification, ManagementCV
from .forms import UserAdminCreationForm, UserAdminChangeForm


class AnnonceAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'is_available',
                    'enterprise', 'localization']
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ['is_available']
    search_fields = ['localization', 'enterprise__username']
    list_editable = ['is_available', ]

    class Meta:
        model = Annonce

    def formfield_for_dbfield(self, db_field, **kwargs):
        formfield = super(AnnonceAdmin, self).formfield_for_dbfield(
            db_field, **kwargs)
        if 'description' in db_field.name or db_field.name == 'requirements':
            formfield.widget = forms.Textarea(attrs=formfield.widget.attrs)
        return formfield



class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('registration_number', 'email', 'admin',)
    list_filter = ('admin',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'is_pro', 'last_name','username', 'active', 'mobile_phone_number', 'home_phone_number', 'faculty', 'job', 'cursus', 'birth_date',)}),
        ('Permissions', {'fields': ('admin', 'staff',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


class MessageForm(forms.ModelForm):

    class Meta:
        model = Message
        fields = ('author', 'topic', 'content',)
        widgets = {
            'content': forms.Textarea(attrs={'disabled': True})
        }


class MessageFormAdmin(admin.ModelAdmin):
    list_display = ['author', 'topic', 'publication_date']
    search_fields = ['author', 'content']
    list_filter = ['topic']
    form = MessageForm


admin.site.register(Annonce, AnnonceAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Faculty)
admin.site.register(Message, MessageFormAdmin)
admin.site.register(Campus)
admin.site.register(Job)
admin.site.register(Cursus)
admin.site.register(Enterprise)
admin.site.register(Notification)
admin.site.register(ManagementCV)

# Unregister the Group Model
admin.site.unregister(Group)
