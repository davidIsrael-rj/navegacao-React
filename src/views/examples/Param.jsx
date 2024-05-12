import React from "react";
import { useParams } from "react-router-dom";

const Param = props => {

    const {id} = useParams()
    return (
        <div>
            <h1>Parâmetros</h1>
            <h2>Valor: {id} </h2>
        </div>
    )
}

export default Param