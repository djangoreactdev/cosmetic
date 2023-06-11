# Generated by Django 4.1.9 on 2023-06-10 23:35

import cosmeticpro.ecommerce.product.models
from django.db import migrations, models
import django.db.models.deletion
import taggit.managers


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("taggit", "0003_taggeditem_add_unique_index"),
        ("category", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Color",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("color", models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=50)),
                ("slug", models.SlugField(allow_unicode=True, max_length=100, unique=True)),
                (
                    "carat",
                    models.CharField(
                        choices=[
                            ("24", "24 ayar"),
                            ("22", "22 ayar"),
                            ("18", "18 ayar"),
                            ("14", "14 ayar"),
                            ("8", "8 ayar"),
                        ],
                        max_length=2,
                    ),
                ),
                ("weight", models.DecimalField(decimal_places=3, max_digits=6)),
                ("length", models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ("width", models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ("site_rate", models.DecimalField(blank=True, decimal_places=3, max_digits=3, null=True)),
                ("gold_or_jewelry", models.BooleanField(verbose_name="Is gold ?")),
                ("is_rate_fixed", models.BooleanField(default=False)),
                ("provider_gold_rate", models.DecimalField(blank=True, decimal_places=3, max_digits=8, null=True)),
                ("provider_diamond_price", models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ("body", models.TextField()),
                ("iframe", models.TextField(blank=True, null=True)),
                (
                    "status",
                    models.CharField(choices=[("r", "return"), ("p", "publish"), ("d", "draft")], max_length=1),
                ),
                ("create", models.DateTimeField(auto_now_add=True)),
                ("update", models.DateTimeField(auto_now=True)),
                ("image", models.ImageField(upload_to=cosmeticpro.ecommerce.product.models.upload_gallery_image_path)),
                ("sale_number", models.PositiveIntegerField(default=0)),
                ("special_offer", models.BooleanField(default=False)),
                ("numbers_rating", models.FloatField(default=0)),
                ("scope_avrage", models.FloatField(default=0)),
                ("rating", models.DecimalField(decimal_places=2, default=0, max_digits=3)),
                (
                    "category",
                    models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to="category.category"),
                ),
                ("color", models.ManyToManyField(to="product.color")),
            ],
            options={
                "ordering": ["-create"],
            },
        ),
        migrations.CreateModel(
            name="Size",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("size", models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Stone",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=50)),
                ("size", models.DecimalField(decimal_places=2, max_digits=4)),
                ("color", models.CharField(max_length=50)),
                ("clarity", models.CharField(max_length=50)),
                ("cut", models.CharField(max_length=50)),
                ("quantity", models.IntegerField()),
                (
                    "product",
                    models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to="product.product"),
                ),
            ],
        ),
        migrations.AddField(
            model_name="product",
            name="size",
            field=models.ManyToManyField(blank=True, to="product.size"),
        ),
        migrations.AddField(
            model_name="product",
            name="tags",
            field=taggit.managers.TaggableManager(
                help_text="A comma-separated list of tags.",
                through="taggit.TaggedItem",
                to="taggit.Tag",
                verbose_name="Tags",
            ),
        ),
        migrations.CreateModel(
            name="GalleryProduct",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("image", models.ImageField(upload_to="products/gallery/")),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name="galleries", to="product.product"
                    ),
                ),
            ],
        ),
    ]
