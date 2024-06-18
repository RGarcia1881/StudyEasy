from rest_framework import viewsets
from .serializer import UserSerializer, SubjectSerializer, ClassSerializer, QuizSerializer, QuestionSerializer, ProgressSerializer
from .models import User, Subject, Class, Quiz, Question, Progress

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
class SubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()
        
class ClassView(viewsets.ModelViewSet):
    serializer_class = ClassSerializer
    queryset = Class.objects.all()
            
class QuizView(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()
                
class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
                    
class ProgressView(viewsets.ModelViewSet):
    serializer_class = ProgressSerializer
    queryset = Progress.objects.all()
