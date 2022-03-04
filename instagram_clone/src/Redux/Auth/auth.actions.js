import { LOGIN_USER, LOGOUT_USER } from "./auth.actionTypes"


export const login_user = () => ({
    type : LOGIN_USER
})


export const logout_user = () => ({
    type : LOGOUT_USER
})