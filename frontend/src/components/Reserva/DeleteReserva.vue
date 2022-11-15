<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Estas seguro/a que deseas eliminar esta Reserva?</h3>
                <p>Fecha : {{ this.element.fecha }}</p>
                <p>Hora: {{ this.element.hora }}</p>
                <p>Cliente : {{ this.element.clienteid }}</p>
                <p>Empleado : {{ this.element.empleadoid }}</p>
                <p>Corte : {{ this.element.corteid }}</p>

            </div>

        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteReserva" variant="danger">
 
                Eliminar

                </b-button>
            </div>
       </div>
    </div>


</template>

<script>
import axios from 'axios'
export default{
    data (){
        return{
            reservaId: this.$route.params.reservaId,
            element: {
                fecha:'',
                hora:'',
                clienteid:'',
                empleadoid:'',
                corteid:'',
            }
        }
    },
    methods:{
        getReserva: function (){
            const path =`http://localhost:8000/api/v1.0/reserva/${this.reservaId}/`

            axios.get(path).then((response)=>{
                this.element.fecha = response.data.fecha
                this.element.hora = response.data.hora
                this.element.clienteid = response.data.clienteid
                this.element.empleadoid = response.data.empleadoid
                this.element.corteid = response.data.corteid

            })
            .catch((response) =>{
                console.log(error)
            })
        },
        deleteReserva(){
            const path =`http://localhost:8000/api/v1.0/reserva/${this.reservaId}/`
            axios.delete(path).then((response) =>{
                location.href = '/reservas'


            })
            .catch((error) =>{
                this.$swal("¡No es posible eliminar la Reserva!","","error")

            })

        }
    },
    created(){
        this.getReserva()
    }
}

</script>