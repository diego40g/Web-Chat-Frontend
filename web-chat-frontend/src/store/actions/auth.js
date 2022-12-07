import AuthService from '../../services/authService'
import { LOGIN, REGISTER, LOGOUT, UPDATE_PROFILE } from '../type'

export const login = (params, history) => dispatch => {
    return AuthService.login(params)
    .then(data => {
        console.log(data);
        dispatch({ type: LOGIN, payload: data })
        history('/')
    })
    .catch(err => {
    })
}

export const register = (params, history) => dispatch => {
    return AuthService.register(params)
    .then(data => {
        console.log(data);
        dispatch({ type: REGISTER, payload: data })
        history('/')
    })
    .catch(err => {
    })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: LOGOUT })
}

export const updateProfile = (params) => dispatch => {
    return AuthService.register(params)
    .then(data => {
        dispatch({ type: UPDATE_PROFILE, payload: data })
    })
    .catch(err => {
    })
}