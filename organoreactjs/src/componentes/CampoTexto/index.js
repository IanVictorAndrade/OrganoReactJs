import React, { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 
    const [valor, setValor] = useState('')


    const Digitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }


        return (
            <div className="campo-texto">
                <label>
                    {props.label}
                </label>
                <input onChange={Digitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
            </div>
        )
    }
    export default CampoTexto

