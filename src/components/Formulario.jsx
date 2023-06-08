import styled from "@emotion/styled";
import React, { useState } from "react";
import useSelectorMonedas from "../hooks/useSelectorMonedas";
import Currency from "../hooks/Currency";
import { monedas } from "../data/monedas";
import { useEffect } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
color: white;
    background: rgb(232,87,124);
    background: linear-gradient(90deg, rgba(232,87,124,1) 0%, rgba(158,98,193,1) 50%, rgba(56,165,220,1) 100%);
    border: none;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 60px;
    padding: 10px;
   
    font-weight: 900;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 12px;
    transition: background-color .3s ease;
    &:hover{
        background-color: white;
        cursor: pointer;
    }
`;




const Formulario = () =>{
    const [cryptos, setCryptos]= useState([]);
    const [resultados, setResultados]= useState([]);
    const [error, setError]= useState(false);
    const [verse, setVerse]= useState(false);
    const [divisa,SetDivisa] = useState('USD');

    const[moneda, SelectorMonedas] = useSelectorMonedas('Elige una de las Siguientes Divisas',monedas);

    
    const[criptomoneda, SelectorCryptos] = useSelectorMonedas('Elige Tu Cryptomoneda favorita',cryptos);


    const[resultado, CajaResultados]= Currency(resultados);
    

    useEffect(() => {
      const consultarApi = async()=>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=70&tsym=USD";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
        const arregloCryptos = resultado.Data.map(crypto=>{
            const objeto = {
                id: crypto.CoinInfo.Name,
                nombre: crypto.CoinInfo.FullName
            }
            return objeto;
            // console.log(objeto);
        });
        setCryptos(arregloCryptos);
        // console.log(cryptos);
      }
      consultarApi();
     
    }, [])
  
   
    
  const manejadorSubmit = async(e) => {
    e.preventDefault();
    if([moneda,criptomoneda].includes('')){
        console.log('error');
        setError(true);
        
        return
    }
    if([moneda,criptomoneda].includes('Elegir')){
        console.log('error');
        setError(true);
        return
    }else{
    setError(false);
    setVerse(true);
    
        
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=70&tsym=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const objetoC = resultado.Data.find(
            (crypto) => crypto.CoinInfo.Name === criptomoneda
        );
        const objetoData = objetoC.DISPLAY[moneda];
        
            setResultados({
                name: objetoC.CoinInfo.FullName,
                toSymbol: objetoData.TOSYMBOL,
                price: objetoData.PRICE,
                change24hr: objetoData.CHANGE24HOUR,
                change1hr: objetoData.CHANGEHOUR,
                url: objetoData.IMAGEURL,
                 });
            // return objetoC;
            // console.log(objeto);
        

        // setResultados(arregloCryptos2);
        // console.log(cryptos);
      
                }

    
    
  }
 
    return(
<>
        {error && <Error> Todos los campos son obligatorios</Error>}
            <form
            onSubmit={manejadorSubmit}
            >
                <SelectorMonedas/>
                
                <SelectorCryptos/>
               
                <center>

                <InputSubmit type="submit" value="Cotizar" />
                </center>
                {verse && <CajaResultados datos = {resultado}/>}
            </form>
            
                </>
        
    )
}
export default Formulario;