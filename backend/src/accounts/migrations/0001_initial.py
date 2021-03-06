# Generated by Django 4.0.6 on 2022-07-19 21:48

import django.core.validators
from django.db import migrations, models
import django.utils.timezone
import re


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(help_text='Obrigatório. 15 caracteres ou menos. Letras e números', max_length=15, unique=True, validators=[django.core.validators.RegexValidator(re.compile('^[\\w.@+-]+$'), 'Entre com um username válido', 'inválido')], verbose_name='nome de usuário')),
                ('first_name', models.CharField(max_length=30, verbose_name='primeiro nome')),
                ('last_name', models.CharField(max_length=30, verbose_name='sobrenome')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='endereço de email')),
                ('is_staff', models.BooleanField(default=False, help_text='Determina se o usuário pode entrar na rota /admin', verbose_name='status administrador')),
                ('is_active', models.BooleanField(default=True, help_text='Determina se o usuário está ativo no sistema.         Desmarque isso ao invés de deletar o usuário.', verbose_name='Ativo')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='data de criação')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'Usuário',
                'verbose_name_plural': 'Usuários',
            },
        ),
    ]
