import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
  background: rgb(119,20,45);
background: linear-gradient(90deg, rgba(119,20,45,1) 0%, rgba(213,25,25,1) 50%, rgba(51,58,61,1) 100%);
padding: 15px;
text-align: center;
font-size: 20px;
text-transform: uppercase;
margin-top: 30px;
border-radius: 10px;
color:white;
`;

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error