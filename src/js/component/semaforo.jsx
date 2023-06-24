import React, {useState} from "react";
import "../../styles/index.css"


//<button onClick={cambiarEstado} type="button" className={"btn rojo"}></button>

const Semaforo = () => {
    
    //creamos estados
    const[seleccionRojo,setSeleccionRojo] = useState("")
    const[seleccionAmarillo,setSeleccionAmarillo] = useState("")
    const[seleccionVerde,setSeleccionVerde] = useState("")
 

    function cambiarEstadoRojo(){
        setSeleccionRojo("seleccionado")
    }

    function cambiarEstadoAmarillo(){
        setSeleccionAmarillo("seleccionado")
    }

    function cambiarEstadoVerde(){
        setSeleccionVerde("seleccionado")
    }
    
    return (
        <div className="macro">
        <div className="superior"></div>
        <div className="semaforo">
            <div className="rojo"></div>
                <button  onClick={cambiarEstadoRojo} type="button" className={"btn rounded-circle btn-danger " + seleccionRojo}></button>
            <div className="amarillo"></div>
                <button onClick={cambiarEstadoAmarillo} type="button" className={"btn rounded-circle btn-warning " + seleccionAmarillo}></button>
            <div className="verde"></div>
                <button onClick={cambiarEstadoVerde} type="button" className={"btn rounded-circle btn-success " + seleccionVerde}></button>
        </div>
    </div>
    )
};

export default Semaforo;