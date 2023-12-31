# Generated by Django 4.2.5 on 2023-12-10 19:31

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="userReviews",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("email", models.TextField(blank=True, null=True)),
                ("name", models.TextField(blank=True, null=True)),
                ("review", models.TextField(blank=True, null=True)),
                ("rating", models.DecimalField(decimal_places=1, max_digits=2)),
                ("time", models.TextField()),
            ],
        ),
    ]
