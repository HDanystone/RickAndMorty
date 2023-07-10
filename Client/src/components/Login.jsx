import { useState} from "react";
import { useNavigate } from "react-router-dom";
import './styles/Login.css';
import imgLogin from './styles/imagenes/Login.png';

export default function Login(params) {
    const navigate = useNavigate();
    const [userErrors, setErrors] = useState({
        email: '', password: ''
    });
    const datosUsuario = {
        email: 'lalala@mimail.com',
        password: 'buena1!'
    }
    const [userData, setData] = useState({
        email: '', password: ''
    });


    const handleChange = (event) => {
        setData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value,
            })
        );

}

const handleSubmit = (event) => {
    event.preventDefault()
    if (!userErrors.email && !userErrors.password) {
        if (datosUsuario.email === userData.email && datosUsuario.password === userData.password) {
            setData({
                email: "",
                password: "",
            });
            setErrors({
                email: "",
                password: "",
            });
            navigate("/home");
        } else {
            return alert("Usuario o contraseña incorrectos");
        }
    };
}

function validate(errores) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}$/i;
    const HayErrores = {};

    if (errores.email) {
        HayErrores.email = !regexEmail.test(errores.email) ?
            'Ingresa un e-mail válido' : ''
    };
    if (errores.password) {
        HayErrores.password = !regexPassword.test(errores.password) ?
            '1 número, 1 caracter especial y de 6 a 10 caracteres'
            : '';
        if (errores.email === '') HayErrores.email = 'debe ingresar un e-mail';

    }

    return HayErrores;
}

return (
    <div className="login" >
        <div className="sombra" />
        <div className="logimagen" style={{ backgroundImage: `url(${imgLogin})` }}>
            <form onSubmit={handleSubmit}>
                <label> E-Mail</label>
                <input
                    name='email'
                    key='email'
                    value={userData.email}
                    onChange={handleChange}
                    placeholder=' Tu email...'
                    type='text'>
                </input>
                <label className='lblmsg'>{userErrors.email && userErrors.email}</label>
                <label> Contraseña</label>
                <input
                    name='password'
                    key='password'
                    type='password'
                    value={userData.password}
                    onChange={handleChange}
                    placeholder=' Tu contraseña...'></input>
                <label className='lblmsg'>{userErrors.password && userErrors.password}</label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
)
}