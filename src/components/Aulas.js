import React from "react";
import { Link, useResolvedPath} from "react-router-dom";
import data from "./Data"

function Aulas(props){

    useResolvedPath('/');

    return(

        <div>

            <h1>Aulas</h1>

            <ul className="list-unstyled">
                {data.map( aula => { return(<li key={aula.id}> <Link to={`${aula.id}`}>{aula.title}</Link> </li> )} )}
            </ul>

        </div>

    )

}

export default Aulas;