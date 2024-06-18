from django.contrib import admin
from .models import Subject, Class, Quiz, Question, User, Progress

# Register your models here.
admin.site.register(Subject)
admin.site.register(Class)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(User)
admin.site.register(Progress)
