from rest_framework import serializers
from .models import * 


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'


class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class CortetratamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cortetratamiento
        fields = '__all__'

