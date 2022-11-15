<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>LISTA DE CLIENTES</h2>

                <div class="col-md-12">
                    <b-table striped hover :items="clientes" :fields="fields">

                        <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary" :to="{ name: 'EditCliente', params: {clienteId: data.item.id}}">
                                Editar

                            </b-button>

                            <b-button size="sm" variant="danger" :to="{ name: 'DeleteCliente', params: {clienteId: data.item.id}}" >
                                Eliminar

                            </b-button>

                        </template>

                    </b-table>

                </div>
            </div>
        </div>
        <div>
            <b-button style="float:left;" size="sm" :to="{ name: 'NewCliente' }">Crear</b-button>
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
                { key: 'telefono', label: 'Telefono'},
                { key: 'direccion', label: 'Direccion'},
                { key: 'action', label: 'Acciones'}

            ],
            clientes: []
        }
    },
    methods: {
        getClientes: function(){

            const path = 'http://localhost:8000/api/v1.0/cliente/'
            axios.get(path).then((response) =>{
                this.clientes = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }

    },
    
    created(){
        this.getClientes()
    }
}
</script>

<style lang="css" scoped>
</style>
