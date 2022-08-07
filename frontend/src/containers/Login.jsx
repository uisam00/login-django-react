import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '' 
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <p>Faça Login para accessar o sistema</p>
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
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="8"
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Entrar</button>
            </form>
            <p className="mt-3">
                Não possui uma conta? <Link to="/cadastrar">Cadastrar</Link>
            </p>
            <p className="mt-3">
                Esqueceu sua senha? <Link to="/recupera-senha">Recuperar Senha</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);