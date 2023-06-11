from django.contrib.auth.models import AbstractUser
from django.db.models import CharField, EmailField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.db import models

from cosmeticpro.users.managers import UserManager


class User(AbstractUser):
    """
    Default custom user model for cosmeticpro.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    # def save(self, *args, **kwargs):
    #     pass

    # First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    first_name = CharField(_("first name"), blank=True, max_length=255)
    last_name = CharField(_("last name"), blank=True, max_length=255)
    email = EmailField(_("email address"), unique=True)
    username = CharField(_("username"), blank=True, max_length=255)
    is_active = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def get_absolute_url(self) -> str:
        """Get URL for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"pk": self.id})
