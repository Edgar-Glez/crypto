import styled from "@emotion/styled";
import React, { useState } from "react"

const useSelectorMonedas = (label,divisas) => {
    const Label = styled.label`
        color: white;
        /* border-right: 60%;
        min-width: 900px; */
    `;
    const DropMenu = styled.select`
    width: 100%;
    /* margin-right: 100%; */
        color: white;
        background: rgb(232,87,124);
background: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%);
        /* background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 8%, rgba(2,44,81,1) 32%, rgba(1,88,126,1) 50%, rgba(1,95,133,1) 75%, rgba(0,212,255,1) 100%); */
        /* width: 800px; */
        text-transform: uppercase;
        border-radius: 12px;
        padding: 10px;
        margin: 10px;
        transition: background-color .3s ease;
        &:hover{
        background-color: red;
        cursor: pointer;
    }
        
    `;
    const Opciones = styled.option`
    -webkit-appearance: none;
    color: white;
    background-color: rgb(126, 19, 148);
    background-image: linear-gradient(90deg, rgba(2,0,36,1) 8%, rgba(2,44,81,1) 32%, rgba(1,88,126,1) 50%, rgba(1,95,133,1) 75%, rgba(0,212,255,1) 100%);
    /* background-color: linear-gradient(90deg, rgba(2,0,36,1) 8%, rgba(2,44,81,1) 32%, rgba(1,88,126,1) 50%, rgba(1,95,133,1) 75%, rgba(0,212,255,1) 100%); */

`;
    const [state,setState] = useState('');
    
    const SelectorMonedas=()=>
        <>
        <Label>{label}</Label>
        
        <DropMenu value={state}
        onChange={e => setState(e.target.value)
        }>
            <Opciones>Elegir</Opciones>
            {divisas?.map(divisa=>(
                <Opciones
                    value={divisa.id}
                    key={divisa.id}
                >{divisa.nombre}</Opciones>
            ))}
   
        </DropMenu>
        </>

    
    return [state, SelectorMonedas];
}
export default useSelectorMonedas
//npm run dev