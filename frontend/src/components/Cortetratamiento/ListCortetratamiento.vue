<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>LISTA DE CORTES/TRATATIEMTOS</h2>

                <div class="col-md-12">
                    <b-table striped hover :items="cortetratamientos" :fields="fields">

                        <template v-slot:cell(action)="data">
                            <b-button size="sm" variant="primary" :to="{ name: 'EditCortetratamiento', params: {cortetratamientoId: data.item.id}}">
                                Editar

                            </b-button>

                            <b-button size="sm" variant="danger" :to="{ name: 'DeleteCortetratamiento', params: {cortetratamientoId: data.item.id}}">
                                Eliminar

                            </b-button>

                        </template>

  

                    </b-table>

                </div>
            </div>
        </div>
        <div>
            <b-button style="float:left;" size="sm" :to="{ name: 'NewCortetratamiento' }">Crear</b-button>
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
                { key: 'valor', label: 'Valor'},
                { key: 'action', label: 'Acciones'},

            ],
            cortetratamientos: []
        }
    },
    methods: {
        getCortetratamientos: function(){

            const path = 'http://localhost:8000/api/v1.0/cortetratamiento/'
            axios.get(path).then((response) =>{
                this.cortetratamientos = response.data
            })
            .catch((error) =>{
                console.log(error)
            })
        }

    },
    
    created(){
        this.getCortetratamientos()
    }
}
</script>

<style lang="css" scoped>
</style>