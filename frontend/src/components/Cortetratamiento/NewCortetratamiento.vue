<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-right">
                <h2>Nuevo Corte/Tratamiento</h2>
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
                                    <b-button type="submit" variant="primary">Crear</b-button>
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
            form: {
                nombre:'',
                valor:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path ='http://localhost:8000/api/v1.0/cortetratamiento/'

            axios.post(path, this.form).then((response)=>{
                this.form.nombre = response.data.nombre
                this.form.valor = response.data.valor

                this.$swal("¡Corte/Tratamiento Creado exitosamente!","","success")


            })
            .catch((response) =>{
                this.$swal("¡El Corte/Tratamiento No ha sido Creado!","","error")
            })
        },

    },
    created(){
        
    }
}

</script>