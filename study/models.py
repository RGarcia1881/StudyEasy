from django.db import models

# Create your models here.
class Subject(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Class(models.Model):
    
    LESSON_PICTURE_OPTIONS = [
        ('client/src/assets/Lesson/Esp1.png', 'Esp1'),
        ('client/src/assets/Lesson/Esp2.png', 'Esp2'),
        ('client/src/assets/Lesson/Esp3.png', 'Esp3'),
        ('client/src/assets/Lesson/Esp4.png', 'Esp4'),
        ('client/src/assets/Lesson/Esp5.png', 'Esp5'),
        ('client/src/assets/Lesson/Esp6.png', 'Esp6'),
        ('client/src/assets/Lesson/Esp7.png', 'Esp7'),
        ('client/src/assets/Lesson/Esp8.png', 'Esp8'),
        ('client/src/assets/Lesson/Math1.png', 'Math1'),
        ('client/src/assets/Lesson/Math2.png', 'Math2'),
        ('client/src/assets/Lesson/Math3.png', 'Math3'),
        ('client/src/assets/Lesson/Math4.png', 'Math4'),
        ('client/src/assets/Lesson/Math5.png', 'Math5'),
        ('client/src/assets/Lesson/Math6.png', 'Math6'),
        ('client/src/assets/Lesson/Math7.png', 'Math7'),
        ('client/src/assets/Lesson/Math8.png', 'Math8'),
    ]
    
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='classes')
    title = models.CharField(max_length=100)
    content = models.TextField()
    link = models.CharField(max_length=100)
    img = models.CharField(max_length=100, choices=LESSON_PICTURE_OPTIONS)

    def __str__(self):
        return self.title

class Quiz(models.Model):
    class_instance = models.OneToOneField(Class, on_delete=models.CASCADE, related_name='quiz')
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')
    text = models.TextField()
    correct_answer = models.CharField(max_length=100)

    def __str__(self):
        return self.text

class User(models.Model):
    
    PROFILE_PICTURE_CHOICES = [
        ('client/src/assets/Profile/Amiko.png', 'Amiko'),
        ('client/src/assets/Profile/Bro.png', 'Bro'),
        ('client/src/assets/Profile/Pana.png', 'Pana'),
        ('client/src/assets/Profile/Rafiki.png', 'Rafiki'),
    ]
    
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    pic = models.CharField(max_length=100, choices=PROFILE_PICTURE_CHOICES, default='client/src/assets/Profile/Cow.jpg')

    def __str__(self):
        return self.name

class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='progress')
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    completed_classes = models.ManyToManyField(Class)
    progress_percentage = models.FloatField(default=0.0)

    def __str__(self):
        return f'{self.user.name} - {self.subject.name}'
