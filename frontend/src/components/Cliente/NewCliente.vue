<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-right">
                <h2>Nuevo Clientes</h2>
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
                                <label for="telefono" class="col-sm-2 col-form-label">Telefono</label>
                                <div class="col-sm-6 text-end">
                                    <input type="text" placeholder="Telefono" name="telefono" class="form-control" v-model.trim="form.telefono">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="direccion" class="col-sm-2 col-form-label">Direccion</label>
                                <div class="col-sm-6 ">
                                    <input type="text" placeholder="Direccion" name="direccion" class="form-control" v-model.trim="form.direccion">

                                </div>
                            </div>
                            
                            <div class="rows">
                                <div class="col text-start">
                                    <b-button type="submit" variant="primary">Crear</b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{ name: 'ListCliente' }">Cancelar</b-button>
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
                telefono:'',
                direccion:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path ='http://localhost:8000/api/v1.0/cliente/'

            axios.post(path, this.form).then((response)=>{
                this.form.nombre = response.data.nombre
                this.form.apellido = response.data.apellido
                this.form.identificacion = response.data.identificacion
                this.form.telefono = response.data.telefono
                this.form.direccion = response.data.direccion
                
                this.$swal("¡Cliente Creado Exitosamente!","","success")
                
                

            })
            .catch((response) =>{
                this.$swal("¡El Cliente No ha sido Creado!","","error")
            })
        },
        
    },
    created(){
        
    }
}

</script>