import React, { useState } from 'react'
import styled from "@emotion/styled";

const Currency = (datos) => {
  console.log(datos);
  const {name,toSymbol,price,change24hr,change1hr,url} = datos;
  const imagelocation= `https://www.cryptocompare.com${url}`
  // Nombre, toSymbol, price, Image URL, Change24hr
  const [state,setState] = useState('');

  const Contenedor = styled.div`
  /* background: rgb(232,87,124);
    background: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%); */
  /* max-width: 900px; */
  border-radius: 60px;
  border-style: dashed;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%);
  
  margin: 20;
  width: 100%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 1rem;
  }`;
  const Moneda = styled.h1`
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
  `

  const ImagenPrueba = styled.img`
  /* padding-top: 10%; */
  margin-left: 10%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15%;
  /* background-color: aqua; */
  height: 180px;
  width: 180px;
  align-self: center;
  `;
  const Solicitud = styled.h4`
  color: white;
  `;
  const Resultado = styled.span`
    color: #0ba50b;
    /* -webkit-text-stroke: 0.3px black; */
    
  `
  const Contenedor2 = styled.div`
  /* background: rgb(232,87,124);
    background: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%); */
  /* max-width: 900px; */
  border-radius: 60px;
  border-style: dashed;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%);
  
  margin: 20;
  width: 100%;
  @media (min-width: none){
    display: list-item;
    grid-template-columns: repeat(1,1);
    column-gap: 1rem;
  }`;


  // const [state,setState] = useState('');
    
  const Currency=()=>
      <>
      
      <center>
      <Contenedor>

        <ImagenPrueba src={imagelocation}/>
      <div>
          <Moneda>{name}</Moneda>
          <Solicitud> Valor: <Resultado>{price} </Resultado> </Solicitud>
          <Solicitud>Cambio 24 hr: <Resultado>{change24hr}</Resultado></Solicitud>
          <Solicitud>Cambio hr: <Resultado> {change1hr}</Resultado></Solicitud>
          



      </div>
      </Contenedor>
        </center>
      </>

  
return [state, Currency];
}

export default Currency