import { toast } from 'react-toastify';

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action; 

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case SIGNUP_SUCCESS:
            toast.success('Um e-mail de confirmação foi enviado')
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case LOGIN_FAIL:
            toast.error('Houve um problema no login, tente de novo')
        case SIGNUP_FAIL:
            toast.error('Houve um problema no cadastro, tente de novo')
        case LOGOUT:
            toast.success('Você saiu!')
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case PASSWORD_RESET_SUCCESS:
            toast.success('Um e-mail de confirmação foi enviado')
            return {
                ...state,
            }
        case PASSWORD_RESET_FAIL:
            toast.warning('Esse e-mail não está cadastrado')
            return {
                ...state,
            }
        case PASSWORD_RESET_CONFIRM_SUCCESS:
            toast.success('Senha recuparada com sucesso!')
            return {
                ...state,
            }
        case PASSWORD_RESET_CONFIRM_FAIL:
            toast.warning('Esse token se expirou, tente novamente')
            return {
                ...state,
            }
        case ACTIVATION_FAIL:
            toast.warning('Esse token se expirou, tente novamente')
            return {
                ...state,
            }
        case ACTIVATION_SUCCESS:
            toast.success('Usuário agora está ativo')
            return {
                ...state,
            }
        default:
            return state;
    }
}