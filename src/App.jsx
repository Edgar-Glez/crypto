import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import styled from "@emotion/styled"
import ImageCrypto from './assets/Bitcoin.png'

function App() {
  const Heading =styled.h1`
  font-family: 'Oswald', sans-serif;
  font-weight: 900;
  font-size: 80px;
  
  /* background: -webkit-linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%); */
  background-clip: text;
  color: white;
  /* -webkit-text-fill-color: transparent; */
  /* -webkit-text-stroke: 0.1px white;  */
  margin-top: 80px;
    margin-bottom: 50px;
    &::after{
      content: '';
      width: 400px;
      height: 6px;
      background: rgb(232,87,124);
    background: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%);
   
      display: block;
      margin: 10px auto 0 auto;


    }
  `;
  const Contenedor = styled.div`
   
    max-width: 1100px;
    margin: 0 auto;
    width: 90%;
   
    @media (min-width: 1100px){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }
    
  `;
  const Imagen = styled.img`
    max-width: 400px;
    
    width: 900px;
    margin: 100px auto 0 auto;
    display: block;
    
  `;
//DropList

  return (
    <Contenedor>
      <Imagen
      src={ImageCrypto}
      alt="es una imagen de crypto"/>
      <div><center>
        
        <Heading>CRYPTO RGB</Heading>
      </center>
        <Formulario/>
        
      </div>
      </Contenedor>
  )
}

export default App
