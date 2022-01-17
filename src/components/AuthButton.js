import React from "react";
import { loginAction, logoutAction } from "../actions/loginAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Auth(props){

    const login = useSelector(state => state);
    const dispatch = useDispatch();
    const nav = useNavigate();

    function teste(act){

        dispatch(act);
        nav("/", {replace:true})

    }

    return(

        login ? 
        <button className="btn btn-outline-primary" onClick={() => {teste( logoutAction() )}}>Logout</button>
        :
        <button className="btn btn-primary" onClick={() => {teste( loginAction() )}}>Login</button>
    )

}


export default Auth;