from django.db import models

# Create your models here.
class Sensor(models.Model):
    TIPOS_SENSOR_CHOICES = [
        ("Temperatura", "Temperatura"),
        
        ("Umidade", "Umidade"),
        ("Contador", "Contador"),
        ("Luminosidade", "Luminosidade")
    ]
    
    tipo = models.CharField(max_length=50, choices=TIPOS_SENSOR_CHOICES)
    mac_address = models.CharField(max_length=20, null=True)
    latitude = models.FloatField();
    longitude = models.FloatField();
    localizacao = models.CharField(max_length=100)
    responsavel = models.CharField(max_length=100)
    unidade_medida = models.CharField(max_length=20, blank=True, null=True)
    status_operacional = models.BooleanField(default=True)
    observacao = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.tipo} - {self.localizacao}"