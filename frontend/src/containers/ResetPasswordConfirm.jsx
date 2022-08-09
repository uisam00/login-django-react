import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        await reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }
    return (
        <div className="container mt-5">
            <h1>Recuperação de Senha</h1>
            <p>Escolha sua nova senha</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Nova senha"
                        name="new_password"
                        value={new_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Confirme sua senha"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Confirmar</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);