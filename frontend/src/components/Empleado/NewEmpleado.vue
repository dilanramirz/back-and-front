<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-right">
                <h2>Nuevo Empleado</h2>
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
                                <label for="apellido" class="col-sm-2 col-form-label">Apellido</label>
                                <div class="col-sm-6 ">
                                    <input type="text" placeholder="Apellido" name="apellido" class="form-control" v-model.trim="form.apellido">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="identificacion" class="col-sm-2 col-form-label">Identificacion</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Identificacion" name="identificacion" class="form-control" v-model.trim="form.identificacion">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="dias" class="col-sm-2 col-form-label">Dias</label>
                                <div class="col-sm-6 text-end">
                                    <input type="text" placeholder="Dias" name="dias" class="form-control" v-model.trim="form.dias">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="horas" class="col-sm-2 col-form-label">Horas</label>
                                <div class="col-sm-6 ">
                                    <input type="text" placeholder="Horas" name="horas" class="form-control" v-model.trim="form.horas">

                                </div>
                            </div>
                            
                            <div class="rows">
                                <div class="col text-start">
                                    <b-button type="submit" variant="primary">Crear</b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{ name: 'ListEmpleado' }">Cancelar</b-button>
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
                apellido:'',
                identificacion:'',
                dias:'',
                horas:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path ='http://localhost:8000/api/v1.0/empleado/'

            axios.post(path, this.form).then((response)=>{
                this.form.nombre = response.data.nombre
                this.form.apellido = response.data.apellido
                this.form.identificacion = response.data.identificacion
                this.form.dias = response.data.dias
                this.form.horas = response.data.horas

                this.$swal("¡Empleado Creado exitosamente!","","success")


            })
            .catch((response) =>{
                this.$swal("¡El Empleado No ha Sido Creado!","","error")
            })
        },

    },
    created(){
        
    }
}

</script>