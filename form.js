import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Form() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState('')
    const navigate= useNavigate()

const handlesubmit =(e)=>{
    e.preventDefault()
    const formdata={name,email,age}
    axios.post('http://localhost:2000/userpost', formdata)
    .then(response =>{
        console.log('response',response.data)
    } )
    .catch(error =>{
        console.error('Error', error)
    })
}
const handleView=()=>{
    navigate('/get')
}

    return (
        <div>
            <form onSubmit={handlesubmit} action="">
            <h1>form</h1>
            <label>name</label>
            <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} /><br />
            <label>email</label>
            <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
            <label>age</label>
            <input type='number' placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} /><br />
            <button >submit</button>
            <button onClick={handleView}>view</button>
           


            </form>
        </div>
    )
}

export default Form;