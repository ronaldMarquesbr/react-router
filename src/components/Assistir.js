import React from "react";
import { useLocation } from "react-router-dom";


function useQuery(){

    return new URLSearchParams(useLocation().search)

}


function Assistir(props){

    const query = useQuery();

    console.log(query.get("v"));

    return(

        <div>

            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get("v")}`} title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>

    )

}

export default Assistir;