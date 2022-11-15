<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Estas seguro/a que deseas eliminar este Empleado?</h3>
                <p>Nombre : {{ this.element.nombre }}</p>
                <p>Apellido: {{ this.element.apellido }}</p>
                <p>Identificacion : {{ this.element.identificacion }}</p>
                <p>Dias : {{ this.element.dias }}</p>
                <p>Horas : {{ this.element.horas }}</p>

            </div>

        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteEmpleado" variant="danger">
 
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
            empleadoId: this.$route.params.empleadoId,
            element: {
                nombre: '',
                apellido:'',
                identificacion:'',
                dias:'',
                horas:'',
            }
        }
    },
    methods:{
        getEmpleado: function (){
            const path =`http://localhost:8000/api/v1.0/empleado/${this.empleadoId}/`

            axios.get(path).then((response)=>{
                this.element.nombre = response.data.nombre
                this.element.apellido = response.data.apellido
                this.element.identificacion = response.data.identificacion
                this.element.dias = response.data.dias
                this.element.horas = response.data.horas

            })
            .catch((response) =>{
                console.log(error)
            })
        },
        deleteEmpleado(){
            const path =`http://localhost:8000/api/v1.0/empleado/${this.empleadoId}/`
            axios.delete(path).then((response) =>{
                location.href = '/empleados'


            })
            .catch((error) =>{
                this.$swal("¡No es posible eliminar el Empleado!","","error")

            })

        }
    },
    created(){
        this.getEmpleado()
    }
}

</script>