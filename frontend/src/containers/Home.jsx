import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Home = ({ isAuthenticated }) => (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Bem Vindo ao Sistema de Login do Sam! </h1>
            <p className='lead'>Esse sistema foi desenvolvido para o PDI do Sam, não tem valor comercial. Esse sistema foi feito com o coração ❤️.</p>
            <hr className='my-4' />
            <p></p>
            <Link hidden={isAuthenticated} className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            <h3 hidden={!isAuthenticated}>Você está logado!</h3>
        </div>
    </div>  
);

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {  })(Home);