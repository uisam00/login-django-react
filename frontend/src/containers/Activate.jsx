import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { activate } from "../actions/auth";

const Activate = ({ match, activate }) => {
    const [activated, setActivated] = useState(false);

    const activate_account = async e => {
        const uid = match.params.uid;
        const token = match.params.token;

        await activate(uid, token);
        setActivated(true);
    };

    if (activated) {
        return <Redirect to='/login' />
    }
    return (
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Ativar sua Conta:</h1>
                <button
                    onClick={activate_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Ativar
                </button>
            </div>
        </div>
    );
};

export default connect(null, { activate })(Activate);