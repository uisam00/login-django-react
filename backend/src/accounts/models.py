import re
from django.db import models
from django.core import validators
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
class UserManager(BaseUserManager):
    def _create_user(self, username, email, password, is_staff, is_superuser, **extra_fields):
        now = timezone.now()
        if not username:
            raise ValueError('Username é obrigatório')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email,
        is_staff=is_staff, is_active=True,
        is_superuser=is_superuser, last_login=now,
        date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        return self._create_user(username, email, password, False, False,
        **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        user=self._create_user(username, email, password, True, True,
        **extra_fields)
        user.is_active=True
        user.save(using=self._db)
        return user
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('nome de usuário', max_length=15, unique=True,
        help_text='Obrigatório. 15 caracteres ou menos. Letras e números',
        validators=[
            validators.RegexValidator(
                re.compile('^[\w.@+-]+$'),
                'Entre com um username válido',
                'inválido')])
    first_name = models.CharField('primeiro nome', max_length=30)
    last_name = models.CharField('sobrenome', max_length=30)
    email = models.EmailField('endereço de email', max_length=255, unique=True)
    is_staff = models.BooleanField('status administrador', default=False,
        help_text='Determina se o usuário pode entrar na rota /admin')
    is_active = models.BooleanField('Ativo', default=True,
        help_text='Determina se o usuário está ativo no sistema. \
        Desmarque isso ao invés de deletar o usuário.')
    date_joined = models.DateTimeField('data de criação', default=timezone.now)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()
    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.username