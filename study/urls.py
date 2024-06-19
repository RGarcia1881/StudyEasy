from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from study import views

#api versioning
router = routers.DefaultRouter()
router.register('user', views.UserView, 'users')
router.register('subject', views.SubjectView, 'subjects')
router.register('class', views.ClassView, 'classes')
router.register('quiz', views.QuizView, 'quizzes')
router.register('question', views.QuestionView, 'questions')
router.register('progress', views.ProgressView, 'progresses')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='StudyEasy API'))
]
