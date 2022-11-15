<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>LISTA DE EMPLEADOS</h2>

                <div class="col-md-12">
                    <b-table striped hover :items="empleados" :fields="fields">

                        <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary" :to="{ name: 'EditEmpleado', params: {empleadoId: data.item.id}}">
                                Editar

                            </b-button>

                            <b-button size="sm" variant="danger" :to="{ name: 'DeleteEmpleado', params: {empleadoId: data.item.id}}">
                                Eliminar

                            </b-button>

                        </template>

  

                    </b-table>

                </div>
            </div>
        </div>
        <div>
            <b-button style="float:left;" size="sm" :to="{ name: 'NewEmpleado' }">Crear</b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data() {
        return{
            fields: [
                { key: 'nombre', label: 'Nombre'},
                { key: 'apellido', label: 'Apellido'},
                { key: 'identificacion', label: 'Identificacion'},
                { key: 'dias', label: 'Dias'},
                { key: 'horas', label: 'Horas'},
                { key: 'action', label: 'Acciones'}

            ],
            empleados: []
        }
    },
    methods: {
        getEmpleados: function(){

            const path = 'http://localhost:8000/api/v1.0/empleado/'
            axios.get(path).then((response) =>{
                this.empleados = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }

    },
    
    created(){
        this.getEmpleados()
    }
}
</script>

<style lang="css" scoped>
</style>