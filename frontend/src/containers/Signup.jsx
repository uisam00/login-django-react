import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { signup } from "../actions/auth";
import { toast } from 'react-toastify';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        if(password === re_password){
            await signup(username, email, password, re_password);
            setAccountCreated(true);
        }
        else{
            toast.warning('As senhas devem ser iguais')
        }

    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    if(accountCreated){
        return <Redirect to='/login' />
    }
    return (
        <div className="container mt-5">
            <h1>Cadastrar</h1>
            <p>Faça seu cadastro aqui</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Nome de usuário"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="8"
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Confirme sua senha"
                        name="re_password"
                        value={re_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Cadastrar</button>
            </form>
            <p className="mt-3">
                Já possui uma conta? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(null, { signup })(Signup);