import React from 'react';
import './ListaSuspensa.css';

export default function ListaSuspensa(props) {
    console.log(props.itens)

    return (
        <div>
            <label className='myLabel'>{props.label}</label>
            <select className={"mySelect"}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}