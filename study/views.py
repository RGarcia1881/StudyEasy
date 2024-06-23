from rest_framework import viewsets, status
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
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

# Configura tus credenciales de Gmail
GMAIL_USER = 'seasy9097@gmail.com'
GMAIL_PASSWORD = 'whfr dnve lajf yoln'


@api_view(['POST'])
def request_email(request):
    phone = request.data.get('phone')
    try:
        user = User.objects.get(phone=phone)
        return Response({'message': 'Número de teléfono verificado'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'message': 'Número de teléfono no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def send_password_email(request):
    phone = request.data.get('phone')
    email = request.data.get('email')
    try:
        user = User.objects.get(phone=phone)
        
        # Debugging information
        print(f"Phone: {phone}, Email: {email}, User: {user}")
        
        msg = MIMEMultipart()
        msg['From'] = GMAIL_USER
        msg['To'] = email
        msg['Subject'] = 'Recuperación de contraseña'
        body = f"Tu contraseña es: {user.password}"
        msg.attach(MIMEText(body, 'plain'))
        
        # More debugging information
        print(f"Email message: {msg}")
        
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        
        # Debugging the login process
        print("Logging in to the email server")
        
        server.login(GMAIL_USER, GMAIL_PASSWORD)
        text = msg.as_string()
        
        # Debugging before sending the email
        print("Sending email")
        
        server.sendmail(GMAIL_USER, email, text)
        server.quit()
        
        # Debugging after email sent
        print("Email sent successfully")
        
        return Response({'message': 'Correo enviado exitosamente'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'message': 'Número de teléfono no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        # Debugging the exception
        print(f"Error: {str(e)}")
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)