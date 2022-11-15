<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Estas seguro/a que deseas eliminar este cliente?</h3>
                <p>Nombre : {{ this.element.nombre }}</p>
                <p>Apellido: {{ this.element.apellido }}</p>
                <p>Identificacion : {{ this.element.identificacion }}</p>
                <p>Telefono : {{ this.element.telefono }}</p>
                <p>Direccion : {{ this.element.direccion }}</p>

            </div>

        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteCliente" variant="danger">
 
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
            clienteId: this.$route.params.clienteId,
            element: {
                nombre: '',
                apellido:'',
                identificacion:'',
                telefono:'',
                direccion:'',
            }
        }
    },
    methods:{
        getCliente: function (){
            const path =`http://localhost:8000/api/v1.0/cliente/${this.clienteId}/`

            axios.get(path).then((response)=>{
                this.element.nombre = response.data.nombre
                this.element.apellido = response.data.apellido
                this.element.identificacion = response.data.identificacion
                this.element.telefono = response.data.telefono
                this.element.direccion = response.data.direccion

            })
            .catch((response) =>{
                console.log(error)
            })
        },
        deleteCliente(){
            const path =`http://localhost:8000/api/v1.0/cliente/${this.clienteId}/`
            axios.delete(path).then((response) =>{
                location.href = '/clientes'


            })
            .catch((error) =>{
                this.$swal("¡No es posible eliminar el Cliente!","","error")

            })

        }
    },
    created(){
        this.getCliente()
    }
}

</script>