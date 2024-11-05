import React, { useState} from "react";

function Contador(){
    const[contador, setContador ] = useState(0);

    const manejarClick = ()=>{
        setContador(contador +1);
    };

    return (
        <div>
            <h1>Practica: Manejo de Eventos React</h1>
            <h1>
                Contador: {contador}
            </h1>
            <button onClick={manejarClick}>Incrementar</button>
        </div>
    )
}

export default Contador;