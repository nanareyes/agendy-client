import axios from 'axios';
import jwt from 'jsonwebtoken';

export function login (vueThis) {
    axios.post('https://agendy-api.herokuapp.com/login',
    vueThis.user
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
                        vueThis.$swal.fire(
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
                        vueThis.$router.push("portafolioServicios")
                        // if (tipo === 'Estilista') {
                        //     vueThis.$router.push("/")
                        // } else {
                        //     vueThis.$router.push("/")
                        // }
                    }
            });
        } else {
            vueThis.$swal.fire(
                'Usuario NO registrado',
                'Ocurrió un error al ingresar con el correo ' + vueThis.user.email,
                'error'
            )
        }
        let mensaje = response.data
        //console.log(mensaje)
    })
}
