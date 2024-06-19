# Generated by Django 4.2.13 on 2024-06-18 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('study', '0005_alter_class_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='img',
            field=models.CharField(choices=[('../assets/Lesson/Esp1.png', 'Esp1'), ('assets/Lesson/Esp2.png', 'Esp2'), ('assets/Lesson/Esp3.png', 'Esp3'), ('assets/Lesson/Esp4.png', 'Esp4'), ('assets/Lesson/Esp5.png', 'Esp5'), ('assets/Lesson/Esp6.png', 'Esp6'), ('assets/Lesson/Esp7.png', 'Esp7'), ('assets/Lesson/Esp8.png', 'Esp8'), ('assets/Lesson/Math1.png', 'Math1'), ('assets/Lesson/Math2.png', 'Math2'), ('assets/Lesson/Math3.png', 'Math3'), ('assets/Lesson/Math4.png', 'Math4'), ('assets/Lesson/Math5.png', 'Math5'), ('assets/Lesson/Math6.png', 'Math6'), ('assets/Lesson/Math7.png', 'Math7'), ('assets/Lesson/Math8.png', 'Math8')], max_length=100),
        ),
    ]
