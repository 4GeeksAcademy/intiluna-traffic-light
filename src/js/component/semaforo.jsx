import React, {useState} from "react";
import "../../styles/index.css"


//<button onClick={cambiarEstado} type="button" className={"btn rojo"}></button>

const Semaforo = () => {
    
    //creamos estados
    const[rojo,setRojo] = useState("btn-danger")

    function cambiarEstado(){
        setRojo("btn-success")
    }
    
    return (
        <div className="macro">
        <div className="superior"></div>
        <div className="semaforo">
            <div className="rojo"></div>
                <button  onClick={cambiarEstado} type="button" className={"btn rounded-circle" + rojo}></button>
                
            <div className="amarillo"></div>
                <button type="button" className="btn btn-warning"></button>
            <div className="verde"></div>
                <button type="button" className="btn btn-success"></button>
        </div>
    </div>
    )
};

export default Semaforo;