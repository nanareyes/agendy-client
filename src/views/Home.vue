<template>
    <div class="cover-container h-100  flex-column">  

        <b-card 
            overlay
            img-src="https://st4.depositphotos.com/12982378/19880/i/600/depositphotos_198800338-stock-photo-partial-view-woman-receiving-bath.jpg" 
            img-alt="Card Image"

        >
            <div class="left-center">
        
                <main class="form-signin">   
                    <form>
                        <img  class="mb-4" src="@/assets/images/logo.png" alt="" width="100px" height="90px">
                        <h1 class="h3 mb-3 fw-normal">Iniciar sesión</h1>

                        <div class="form-floating">
                        <input v-model="user.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Correo electrónico</label>
                        </div>
                        <div class="form-floating">
                        <input v-model="user.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Constraseña</label>
                        </div>
                        <!-- <button @click="loginUser()" class= "w-100 btn btn-lg btn-primary btn-action" type="submit">Ingresar</button> -->
                        <input @click="loginUser()" class="w-100 btn btn-lg btn-primary" tabindex="-1" role="button" value="Ingresar">
                        <p class="mt-5 mb-3 text-muted">&copy; Derechos registrados 2021</p>
                    </form>
                </main>   
                <div> Si aún no tienes cuenta ingresa aquí:  </div><router-link to="/user" class="nav-link mx-4"
                        >Registrarse</router-link>
            </div>
            
        </b-card>

        
    </div>

</template>


<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';

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
            axios.post('https://agendy-api.herokuapp.com/login',
            this.user
            )
            .then(response => {
                //console.log(response)
                const status_peticion = response.status
                const token = response.data.token
                //console.log(status_peticion)
                if (status_peticion === 200) {
                    localStorage.setItem('token', token)

                    jwt.verify(token, 'secret',
                        (err, datosToken) => {
                            if (err) {
                                this.$swal.fire(
                                        'Error token',
                                        'Token no es válido',
                                        'error'
                                )
                            } else {
                                // console.log('decoded token:', decoded)
                                // Guardar el token decodificado en el localStorage
                                localStorage.setItem('datosUsuario', JSON.stringify(datosToken.data))
                                // Del token se lee el tipo de usuario: Cliente o Estilista
                                const tipo = datosToken.data.tipo
                                this.$router.push("portafolioServicios")
                                // if (tipo === 'Estilista') {
                                //     this.$router.push("/")
                                // } else {
                                //     this.$router.push("/")
                                // }
                            }
                    });
                } else {
                    this.$swal.fire(
                        'Usuario NO registrado',
                        'Ocurrió un error al ingresar con el correo ' + this.user.email,
                        'error'
                    )
                }
                let mensaje = response.data
                //console.log(mensaje)
            })
        }
    }
}

</script>

<style>


    body {
    display: auto;
    background-color:#FAF4EB;
    }

    .flex-column{
        min-height: 600px;
    }
    .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }

    .form-signin .checkbox {
    font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
    z-index: 2;
    }

    .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    };

</style>
