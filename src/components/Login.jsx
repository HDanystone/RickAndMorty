import React, { useState } from "react";
import { useContext } from "react";
import './Login.css'
import './validation.js'
import  validate from './validation.js'


export default function Login(params) {
    const [userErrors, setErrors] = useState( {
        email:'', password:''} )
       
    const [userData, setData] = useState( {
        email:'', password:''} )

     

const handleChange = (event) =>{ 
    setData({
        ...userData,
        [event.target.name]: event.target.value, 
        })
    setErrors(
        validate({
            userErrors,
            [event.target.name]: event.target.value,
        })
    );   
 };

 
const handleSubmit= (event) =>{
    event.preventDefault()
}
   console.log('userdata', userData)
    console.log('errors', userErrors)
    return(
        <div className="login">
            <form onSubmit = {handleSubmit}>
                <label> E-Mail</label>
                <input
                    name = 'email' 
                    key = 'email'
                    value={userData.email} 
                    onChange={handleChange} 
                    placeholder='Tu email...' 
                    type = 'text'>
                </input>
                <label>asd</label>
                <label> Password</label>
                <input
                    name = 'password'
                    key = 'password' 
                    type = 'password'
                    value={userData.password} 
                    onChange={handleChange} 
                    placeholder='Tu password...'></input>
                    <label>asd</label>
                <button disabled={true}>Enviar</button>
            </form>
        </div>
    )
}