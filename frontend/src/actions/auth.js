import axios from 'axios';
import {
    LOGIN_SUCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
} from './types';

export const load_user = () => async dispach => {
    if(localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/jwt/me/`, config);
    
            dispach({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispach({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispach({
            type: USER_LOADED_FAIL
        });
    }
};

export const login = (username, password) => async dispach => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ username, password });
        
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);

            dispach({
                type: LOGIN_SUCESS,
                payload: res.data
            });
        } catch (err) {
            dispach({
                type: LOGIN_FAIL
            });
        }
};