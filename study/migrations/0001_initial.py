# Generated by Django 4.2.13 on 2024-06-17 05:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('pic', models.CharField(choices=[('client/src/assets/Profile/Cow.jpg', 'Cow'), ('client/src/assets/Profile/Duck.jpg', 'Duck'), ('client/src/assets/Profile/Eli.jpg', 'Eli'), ('client/src/assets/Profile/Gorilla.jpg', 'Gorilla'), ('client/src/assets/Profile/Monkey.jpg', 'Monkey'), ('client/src/assets/Profile/Pig.jpg', 'Pig')], default='client/src/assets/Profile/Cow.jpg', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('class_instance', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='quiz', to='study.class')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('correct_answer', models.CharField(max_length=100)),
                ('quiz', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='study.quiz')),
            ],
        ),
        migrations.CreateModel(
            name='Progress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('progress_percentage', models.FloatField(default=0.0)),
                ('completed_classes', models.ManyToManyField(to='study.class')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='study.subject')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='progress', to='study.user')),
            ],
        ),
        migrations.AddField(
            model_name='class',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='classes', to='study.subject'),
        ),
    ]
