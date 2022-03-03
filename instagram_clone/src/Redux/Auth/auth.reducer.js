import { LOGIN_USER, LOGOUT_USER } from "./auth.actionTypes"
import { initialState } from "./auth.constants";
import { updateValue } from "../../utils/localStorage"
 
export const authReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case LOGIN_USER : {
            let userToken = "TOKEN_123"
            updateValue("userToken" , userToken)
            return {
                    ...state ,
                    isUserLoggedIn : true,
                    userToken: userToken,
                }
            }
        case LOGOUT_USER : {
            updateValue("userToken" , "")
            return {
                    ...state, 
                    isUserLoggedIn : false,
                    userToken: "",
                }
            }
        default : {
            return state;
        }
    }
}