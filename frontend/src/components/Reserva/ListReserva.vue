<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>LISTA DE RESERVAS</h2>

                <div class="col-md-12">
                    <b-table striped hover :items="reservas" :fields="fields">

                        <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary" :to="{ name: 'EditReserva', params: {reservaId: data.item.id}}">
                                Editar

                            </b-button>

                            <b-button size="sm" variant="danger" :to="{ name: 'DeleteReserva', params: {reservaId: data.item.id}}">
                                Eliminar

                            </b-button>

                        </template>



                    </b-table>

                </div>
            </div>
        </div>
        <div>
            <b-button style="float:left;" size="sm" :to="{ name: 'NewReserva' }">Crear</b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data() {
        return{
            fields: [
                { key: 'fecha', label: 'Fecha'},
                { key: 'hora', label: 'Hora'},
                { key: 'clienteid', label: 'Cliente'},
                { key: 'empleadoid', label: 'Empleado'},
                { key: 'corteid', label: 'Corte/Tratamiento'},
                { key: 'action', label: 'Acciones'}

            ],
            reservas: []
        }
    },
    methods: {
        getReservas: function(){

            const path = 'http://localhost:8000/api/v1.0/reserva/'
            axios.get(path).then((response) =>{
                this.reservas = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }

    },
    
    created(){
        this.getReservas()
    }
}
</script>

<style lang="css" scoped>
</style>