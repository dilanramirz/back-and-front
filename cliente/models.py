from django.db import models

# Create your models here.

class Empleado(models.Model):
    nombre = models.CharField(max_length=30, null=True)
    apellido = models.CharField(max_length=30, null=True)
    identificacion = models.CharField(max_length=30, null=True)
    dias = models.CharField(max_length=1000, null=True)
    horas = models.CharField(max_length=1000, null=True)

    def __str__(self):
        return self.nombre
    
    

class Cliente(models.Model):
    nombre = models.CharField(max_length=30,null=True)
    apellido = models.CharField(max_length=30, null=True)
    identificacion = models.CharField(max_length=30, null=True)
    telefono = models.CharField(max_length=30)
    direccion = models.CharField(max_length=30)
    empleado = models.ManyToManyField(Empleado, through="Reserva")

    def __str__(self):
        return self.nombre

class Cortetratamiento(models.Model):
    nombre = models.CharField(max_length=30)
    valor = models.CharField(max_length=30)

    def __str__(self):
        return self.nombre
    
    
    
class Reserva(models.Model):
    fecha = models.DateField(max_length=30, null=True)
    hora = models.CharField(max_length=30, null=True)
    clienteid = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    empleadoid = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    corteid = models.ForeignKey(Cortetratamiento, on_delete=models.CASCADE)
    

