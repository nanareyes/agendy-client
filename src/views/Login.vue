<template>
    <div class="Login-User">
        <div class="section-1" id="portafolioSevicios">
            <p class="section-text">Inicio de sesión</p>
            <div>
                <div class="card-body section-body">
                    <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p class="datos-basicos"> Ingrese aquí su información para acceder a su cuenta:</p>

                        <form>
                            
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputEmail1" class="form-label ">Correo electrónico</label>
                                <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Nosotros no compartiremos su información con nadie.</div>
                            </div>
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputPassword1" class="form-label text-start">Contraseña</label>
                                <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            
                            <input @click="loginUser()" class="btn btn-primary" tabindex="-1" role="button" value="Ingresar">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <router-link to="/portafolioServicios" class="btn btn-action">Regresar </router-link>
        </div>
    </div>


</template>

<script>

import {login} from '../libs/user';

export default {
    data () {
        return {
            user: {
                email: '',
                password: ''

            }
        }
    },
        
    methods: {
        loginUser () {
            login(this)
        }
    }
}
</script>
<style scoped>
    .campos-formulario {
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 60px;
        text-align: left;
    }

</style>