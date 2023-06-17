import React from  'react'
export default function validate(inputs) {
console.log(inputs)
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}$/i; 
const errors = {}
//console.log(userData)
console.log('inputs', inputs)

if(inputs.email){
   errors.email = !regexEmail.test(inputs.email) ?
        'Ingresa un e-mail válido' : ''};
if(inputs.password){ 
    errors.password = !regexPassword.test(inputs.password) ?
      
    'Password debe tener al menos 1 número, 1 mayúscula, 1 caracter especial y una longitud de ente 6 y 10 caracteres'
       : ''}
    return errors
}   
 
 