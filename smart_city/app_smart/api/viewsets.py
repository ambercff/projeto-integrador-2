from django.contrib.auth.models import User
from rest_framework import generics, permissions
from app_smart.api import serializers
from ..models import Sensor
from rest_framework import viewsets
from app_smart.api.filters import SensorFilter
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.views import APIView
from django.db.models import Q

class CreateUserAPIViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = serializers.SensorSerializer
    permission_class = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFilter
    
class SensorFilterView(APIView):
    permission_classes = ~[permissions.IsAuthenticated]
    
    
    def post (self, request, *args, **kwargs):
        tipo = request.data.get('tipo', None)
        localizacao = request.data.get('localizacao', None)
        responsavel = request.data.get('responsavel', None)
        status_operacional = request.data.get('status_operacional', None)
        
        filters = Q()
        
        if tipo:
            filters &=Q(tipo_icontains = tipo)
        if localizacao:
            filters &= Q(localizacao_icontains = localizacao)
        if responsavel:
            filters &= Q(responsavel_icontains = responsavel)
        if status_operacional:
            filters &= Q(status_operacional_icontains = status_operacional)
            