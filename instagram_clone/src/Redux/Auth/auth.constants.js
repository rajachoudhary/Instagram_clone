import { getValue } from "../../utils/localStorage"

export const initialState = {
        isUserLoggedIn : getValue("userToken") ? true : false,
        userToken :  getValue("userToken") 
}