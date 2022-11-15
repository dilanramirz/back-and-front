<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-right">
                <h2>Nueva Reservas</h2>
            </div>

        </div>
        <div class="row">
            <div class="col ">
                <div class="card">
                    <div class="card-body">

                        <form @submit="onSubmit">
                            <div class="form-group row ">
                                <label for="fecha" class="col-sm-2 col-form-label">Fecha</label>
                                <div class="col-md-6">
                                    <input type="date" placeholder="Fecha" name="fecha" class="form-control " v-model.trim="form.fecha">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="hora" class="col-sm-2 col-form-label">Hora</label>
                                <div class="col-sm-6 ">
                                    <input type="time" placeholder="Hora" name="hora" class="form-control" v-model.trim="form.hora">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="clienteid" class="col-sm-2 col-form-label">Cliente</label>
                                <div class="col-sm-6">
                                    <input type="text" placeholder="Cliente" name="clienteid" class="form-control" v-model.trim="form.clienteid">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="empleadoid" class="col-sm-2 col-form-label">Empleado</label>
                                <div class="col-sm-6 text-end">
                                    <input type="text" placeholder="Empleado" name="empleadoid" class="form-control" v-model.trim="form.empleadoid">

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="corteid" class="col-sm-2 col-form-label">Corte/Tratamiento</label>
                                <div class="col-sm-6 ">
                                    <input type="text" placeholder="Corte/Tratamiento" name="corteid" class="form-control" v-model.trim="form.corteid">

                                </div>
                            </div>
                            
                            <div class="rows">
                                <div class="col text-start">
                                    <b-button type="submit" variant="primary">Crear</b-button>
                                    <b-button type="submit" class="btn-large-space" :to="{ name: 'ListReserva' }">Cancelar</b-button>
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
                fecha:'',
                hora:'',
                clienteid:'',
                empleadoid:'',
                corteid:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path ='http://localhost:8000/api/v1.0/reserva/'

            axios.post(path, this.form).then((response)=>{
                this.form.fecha = response.data.fecha
                this.form.hora = response.data.hora
                this.form.clienteid = response.data.clienteid
                this.form.empleadoid = response.data.empleadoid
                this.form.corteid = response.data.corteid

                this.$swal("¡Reserva Creada exitosamente!","","success")


            })
            .catch((response) =>{
                this.$swal("¡La Reserva No ha Sido Creada!","","error")
            })
        },
    },
    created(){
        
    }
}

</script>