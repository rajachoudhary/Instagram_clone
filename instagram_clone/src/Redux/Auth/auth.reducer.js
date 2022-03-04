import { LOGIN_USER, LOGOUT_USER } from "./auth.actionTypes"
import { initialState } from "./auth.constants";
import { updateValue } from "../../utils/localStorage"
 
export const authReducer = (state = initialState, {type}) => {
    switch (type) {
        case LOGIN_USER : {
            let token = "TOKEN_123"
            updateValue("userToken" , token)
            return {
                    ...state ,
                    isUserLoggedIn : true,
                    userToken : token
                }
            }
        case LOGOUT_USER : {
            updateValue("userToken" , "")
            return {
                    ...state, 
                    isUserLoggedIn : false,
                    userToken : ""
                }
            }
        default : {
            return state;
        }
    }
}