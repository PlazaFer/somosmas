import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOG_OUT,
    LOADING_ON,
    LOADING_OFF,
    ROL_SUCCESS,
    ROL_FAILED,
    AUTH_FAILED,
    AUTH_SUCCESS
} from "./types";

//Initial values
const initialValues = {
    user: null,
    token: localStorage.getItem("token") || "",
    isLogin: false,
    isError: false,
    loading: false,
    isRegister: false,
    rol_type: localStorage.getItem('rol') || ""
}

//reducer
export default function authReducer(state = initialValues, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: true,
            }
        case ROL_SUCCESS:
            localStorage.setItem('rol', action.payload.rol_type)
            return {
                ...state,
                rol_type: action.payload.rol_type,
                isLogin: true,
                loading: false
            }
        case ROL_FAILED:
        case LOGIN_FAILED:
        case REGISTER_FAILED:
            return {
                ...state,
                isError: true,
                loading: false,
                isRegister: false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                isRegister: true,
            }
        case LOADING_ON:
            return {
                ...state,
                loading: true,
            }
        case LOADING_OFF:
            return {
                ...state,
                loading: false,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: true,
            }
        case AUTH_FAILED:
        case LOG_OUT:
            localStorage.clear()
            return {
                ...state,
                user: null,
                token: "",
                isLogin: false,
                isError: false,
                rol_type: ''
            }
        default:
            return state;
    }
}
