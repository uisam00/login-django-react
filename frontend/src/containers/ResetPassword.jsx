import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { reset_password } from "../actions/auth";

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e =>  {
        e.preventDefault();

        await reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }
    return (
        <div className="container mt-5">
            <h1>Recuperação de Senha</h1>
            <p>Solicite uma nova senha aqui</p>
            <form onSubmit={e => onSubmit(e)}>
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
                <button className="btn btn-primary" type="submit">Recuperar</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);