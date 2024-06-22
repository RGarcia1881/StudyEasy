from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from .serializer import UserSerializer, SubjectSerializer, ClassSerializer, QuizSerializer, QuestionSerializer, ProgressSerializer, LoginSerializer
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
    
@api_view(['POST'])
def simple_login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        phone = serializer.validated_data['phone']
        password = serializer.validated_data['password']

        # Verifica las credenciales
        try:
            user = User.objects.get(phone=phone)
        except User.DoesNotExist:
            return Response({'message': 'Invalid phone or password'}, status=status.HTTP_401_UNAUTHORIZED)

        if user.password != password:
            return Response({'message': 'Invalid phone or password'}, status=status.HTTP_401_UNAUTHORIZED)

        user_data = UserSerializer(user).data
        
        # Aquí es donde generarías un token si estuvieras usando JWT u otro método de autenticación
        return Response({
            'user': user_data,
            'message': 'Login successful'
            }, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)