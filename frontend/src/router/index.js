import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ListCliente from '@/components/Cliente/ListCliente'
import NewCliente from '@/components/Cliente/NewCliente'
import EditCliente from '@/components/Cliente/EditCliente'
import DeleteCliente from '@/components/Cliente/DeleteCliente'


import ListEmpleado from '@/components/Empleado/ListEmpleado'
import NewEmpleado from '@/components/Empleado/NewEmpleado'
import EditEmpleado from '@/components/Empleado/EditEmpleado'
import DeleteEmpleado from '@/components/Empleado/DeleteEmpleado'


import ListCortetratamiento from '@/components/Cortetratamiento/ListCortetratamiento'
import NewCortetratamiento from '@/components/Cortetratamiento/NewCortetratamiento'
import EditCortetratamiento from '@/components/Cortetratamiento/EditCortetratamiento'
import DeleteCortetratamiento from '@/components/Cortetratamiento/DeleteCortetratamiento'


import ListReserva from '@/components/Reserva/ListReserva'
import NewReserva from '@/components/Reserva/NewReserva'
import EditReserva from '@/components/Reserva/EditReserva'
import DeleteReserva from '@/components/Reserva/DeleteReserva'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/empleados',
      name: 'ListEmpleado',
      component: ListEmpleado
    },
    {
      path: '/empleados/nuevo',
      name: 'NewEmpleado',
      component: NewEmpleado
    },
    {
      path: '/empleados/:empleadoId/editar',
      name: 'EditEmpleado',
      component: EditEmpleado
    },
    {
      path: '/empleados/:empleadoId/eliminar',
      name: 'DeleteEmpleado',
      component: DeleteEmpleado
    },
    {
      path: '/clientes',
      name: 'ListCliente',
      component: ListCliente
    },
    {
      path: '/clientes/nuevo',
      name: 'NewCliente',
      component: NewCliente
    },
    {
      path: '/clientes/:clienteId/editar',
      name: 'EditCliente',
      component: EditCliente
    },
    {
      path: '/clientes/:clienteId/eliminar',
      name: 'DeleteCliente',
      component: DeleteCliente
    },
    {
      path: '/cortetratamientos',
      name: 'ListCortetratamiento',
      component: ListCortetratamiento
    },
    {
      path: '/cortetratamientos/nuevo',
      name: 'NewCortetratamiento',
      component: NewCortetratamiento
    },
    {
      path: '/cortetratamientos/:cortetratamientoId/editar',
      name: 'EditCortetratamiento',
      component: EditCortetratamiento
    },
    {
      path: '/cortetratamientos/:cortetratamientoId/eliminar',
      name: 'DeleteCortetratamiento',
      component: DeleteCortetratamiento
    },
    {
      path: '/reservas',
      name: 'ListReserva',
      component: ListReserva
    },
    {
      path: '/reservas/nueva',
      name: 'NewReserva',
      component: NewReserva
    },
    {
      path: '/reservas/:reservaId/editar',
      name: 'EditReserva',
      component: EditReserva
    },
    {
      path: '/reservas/:reservaId/eliminar',
      name: 'DeleteReserva',
      component: DeleteReserva
    },
    
 
  ],
  mode:'history'
})
