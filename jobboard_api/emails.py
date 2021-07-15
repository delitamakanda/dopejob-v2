import html2text

from django.conf import settings
from render_block import render_block_to_string
from django.core.mail import send_mail

class Email:
    template = "emails/base.html"
    from_email = settings.DEFAULT_FROM_EMAIL

    def __init__(self, ctx, to_email):
        self.to_email = to_email
        self.subject = render_block_to_string(self.template, 'subject', ctx)
        self.plain = render_block_to_string(self.template, 'plain', ctx)
        self.body = render_block_to_string(self.template, 'html', ctx)

        if self.plain == "":
            h = html2text.HTML2Text()
            h.ignore_images = True
            h.ignore_emphasis = True
            h.ignore_tables = True
            self.plain = h.handle(self.body)

    def send(self):
        send_mail(self.subject, self.plain, self.from_email, [self.to_email], html_message=self.body)


class UserEmail(Email):
    unsubscribe_field = None

    def __init__(self, ctx, user):
        # if self.unsubscribe_field is None:
            # raise ProgrammingError("Derived class must set unsubscribe_field")

        self.user = user

        ctx = {
            'user': user,
            # 'unsubscribe_link': user.unsubscribe_link(self.unsubscribe_field)
            **ctx
        }

        super().__init__(ctx, user.email)

    def send(self):
        if getattr(self.user):
            super().send()


class NotificationEmail(UserEmail):
    template = 'emails/notification_email.html'
    # unsubscribe_field = 'notification_emails'

    def __init__(self, user):
        ctx = { 'notifications': user.notification_receiver.filter(seen=False) }
        super().__init__(ctx, user)
