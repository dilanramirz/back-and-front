<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Estas seguro/a que deseas eliminar este Corte/Tratamiento?</h3>
                <p>Nombre : {{ this.element.nombre }}</p>
                <p>Valor: {{ this.element.valor }}</p>

            </div>

        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteCortetratamiento" variant="danger">
 
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
            cortetratamientoId: this.$route.params.cortetratamientoId,
            element: {
                nombre: '',
                valor:'',
            }
        }
    },
    methods:{
        getCortetratamiento: function (){
            const path =`http://localhost:8000/api/v1.0/cortetratamiento/${this.cortetratamientoId}/`

            axios.get(path).then((response)=>{
                this.element.nombre = response.data.nombre
                this.element.valor = response.data.valor

            })
            .catch((response) =>{
                console.log(error)
            })
        },
        deleteCortetratamiento(){
            const path =`http://localhost:8000/api/v1.0/cortetratamiento/${this.cortetratamientoId}/`
            axios.delete(path).then((response) =>{
                location.href = '/cortetratamientos'


            })
            .catch((error) =>{
                this.$swal("¡No es posible eliminar el Corte/Tratamiento!","","error")

            })

        }
    },
    created(){
        this.getCortetratamiento()
    }
}

</script>