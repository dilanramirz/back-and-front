from rest_framework import routers

from .views import *

router = routers.SimpleRouter()
router.register('empleado', EmpleadoViewSet)
router.register('reserva',  ReservaViewSet)
router.register('cliente',  ClienteViewSet)
router.register('cortetratamiento',  CortetratamientoViewSet)


urlpatterns = router.urls