import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useParams, } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Update() {
    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    console.log("ID from URL:", id); // Log the ID to ensure it's correct
    if (id) {
      axios.get(`http://localhost:2000/data/${id}`)
        .then(response => {
          const userData = response.data;
          setName(userData.name);
          setEmail(userData.email);
          setAge(userData.age);
        })
        .catch(error => {
          console.error('Error fetching user data:', error.response ? error.response.data : error.message);
        });
    } else {
      console.error('ID is not available');
    }
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const FormData = { name, email,age };
    axios.put(`http://localhost:2000/user/${id}`, FormData)
      .then(response => {
        console.log('Response:', response.data);
        navigate('/get');


      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
      });

  }
  return (
    <div>
         <form onSubmit={handleSubmit} >
        <label htmlFor="" >Name</label>
        <input type="text" className='input' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label htmlFor="">Email</label>
        <input type="email" className='input' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="">Age</label>
        <input type="number" className='input' value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <button type='submit' className='btn' >submit</button>

      </form>

    </div>
  )
}

export default Update