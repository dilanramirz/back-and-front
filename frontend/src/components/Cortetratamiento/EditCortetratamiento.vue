<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-right">
                <h2>Editar Corte/Tratamiento</h2>
            </div>

        </div>
        <div class="row">
            <div class="col ">
                <div class="card">
                    <div class="card-body">

                        <form @submit="onSubmit">
                            <div class="form-group row ">
                                <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Nombre" name="nombre" class="form-control " v-model.trim="form.nombre">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="valor" class="col-sm-2 col-form-label">Valor</label>
                                <div class="col-sm-6 ">
                                    <input type="text" placeholder="Valor" name="valor" class="form-control" v-model.trim="form.valor">

                                </div>
                            </div>
                            
                            <div class="rows">
                                <div class="col text-start">
                                    <b-button type="submit" variant="primary">Editar</b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{ name: 'ListCortetratamiento' }">Cancelar</b-button>
                                </div>
                            </div>

                            

                        </form>
                         
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default{
    data(){
        return{
            cortetratamientoId: this.$route.params.cortetratamientoId,
            form: {
                nombre:'',
                valor:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path =`http://localhost:8000/api/v1.0/cortetratamiento/${this.cortetratamientoId}/`

            axios.put(path, this.form).then((response)=>{
                this.form.nombre = response.data.nombre
                this.form.valor = response.data.valor

                this.$swal("¡Corte/Tratamiento Actualizado exitosamente!","","success")


            })
            .catch((response) =>{
                console.log(error)
            })
        },

        getCortetratamiento: function (){
            const path =`http://localhost:8000/api/v1.0/cortetratamiento/${this.cortetratamientoId}/`

            axios.get(path).then((response)=>{
                this.form.nombre = response.data.nombre
                this.form.valor = response.data.valor

            })
            .catch((response) =>{
                console.log(error)
            })
        }
    },
    created(){
        this.getCortetratamiento()
    }
}

</script>