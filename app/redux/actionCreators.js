import * as actionTypes from './actionType';
import { navigate } from '../NavigationRoot';


export const authUser = token => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: token
    }
}
export const removeToken = () => {
    return {
        type: actionTypes.REMOVE_TOKEN
    }
}



export const tryAuth = (email, password, mode) => dispatch => {
    let url = "";
    const API_KEY = "AIzaSyDG1wnrcA4DMniDaIgCszAs0sQ4a23h3OI";
    if (mode === "signup") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    } else if (mode === "login") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    }
    console.log(url);
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true//successfully login hole ekta token dibe jeta diye further request gula kora jabe.
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                dispatch(authUser(data.idToken));
                navigate("Home");
            }
            console.log(data)
        })

}