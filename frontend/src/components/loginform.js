import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import registerImg from '../components/image/loginimage (2).jpg';
//import userIcon from '../components/image/user.jpg';
import { BASE_URL } from 'E:/landing-page-template-reactjs/src/config.js';
import '../components/sigupform.css'

const Register = () => {
   const [credentials, setCredentials] = useState({
      username: '',
      email: '',
      password: ''
   });

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async e => {
      e.preventDefault();

      try {
         const res = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
         });
         const result = await res.json();

         if (!res.ok) {
            alert(result.message);
         } else {
            // Handle successful registration
            alert(result.message); // Notify user of successful registration
            // Redirect or handle the next steps after successful registration
            // For example, you can redirect to the login page
            // window.location.href = '/login';
         }
      } catch (err) {
         alert('Registration failed. Please try again.');
         console.error(err);
      }
   };

   return (
    <section>
       <Container>
          <Row>
          <Col lg='8' className='m-auto'>
   <div className="login__container d-flex justify-content-between">
      <div className="login__form">
         <h2>LOGIN NOW !!!!</h2>
         <Form onSubmit={handleClick}>
            <FormGroup>
               <input type="text"placeholder='Username' id='username' onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
               <input type="email"placeholder='Email' id='email' onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
               <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
            </FormGroup>
            <Button className='btn secondary_btn auth_btn' type='submit'>Login</Button>
         </Form>
         <p>New here ?<Link to='/signup'>Login</Link></p>
      </div>

      <div className="login__img">
         <img src={registerImg} alt="Register" />
      </div>
   </div>
</Col>

          </Row>
       </Container>
    </section>
 )
}

export default Register