import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router'; 
//Navigate é um custom hook que permite navegar entre as páginas...
//..é um substituto do Redirect da versão anterior.

export default function PrivateRoute({children}) { //children é o conteúdo que está dentro do PrivateRoute().

    const test = useNavigate();
    const isLogged = useSelector(state=>state);

    // return isLogged ? children : <Navigate to="/negado" replace="true" /> // Se estiver logado, retorna o conteúdo que está dentro do PrivateRoute. Se não estiver logado, redireciona para a página de acesso negado.

    if(isLogged){

        return children

    } else {

         return Navigate({to: "/negado", replace:"true"})

    }

}