import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div className='container'>
    <div class='jumbotron mt-5'>
        <h1 class='display-4'>Bem Vindo ao Sistema de Login do Sam! </h1>
        <p class='lead'>Esse sistema foi desenvolvido para o PDI do Sam, não tem valor comercial. Esse sistema foi feito com o coração ❤️.</p>
        <hr class='my-4' />
        <p></p>
        <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
    </div>
  </div>  
);

export default Home;