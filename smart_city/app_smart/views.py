from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def abre_index(request):
    mensagem = "Muito bem vindo ao Smart City"
    return HttpResponse(mensagem)