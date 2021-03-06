import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Widget from '../src/components/Widget';
import Background from '../src/components/Background';
import { useRouter } from 'next/router';

const Button = styled.div`
  display: flex;
  justify-content: center;
  background: #00C389;
  padding: 2vh 2vh;
  border-radius: 0.5em;
  color: white;
  box-shadow: 5px 8px 17px rgb(0 0 0 / 16%);
  width: 300px;
  font-size: 2.1875em;
  margin: 0 0 4.9vh 0;
  align-self: center;
  z-index: 10;
  cursor: pointer;
`

const Span = styled.span`
  color: #F64404;
`;

export default function Home() {
  const router = useRouter();
  const {nome} = router.query;
  
  useEffect(() => {
    setTimeout(() => {
      router.push({
        pathname: '/',
      })
    }, 20000)
  },[])
  
  return (
    <Background>
      <Background.Image src="bg.png"/>
      <Head>
        <title>Mandarin - Recepção</title>
      </Head>
     
      <Widget.Content>
        <img src='logo.png' className="LogoMandarin"/>
        <h1>Olá, <Span>{!nome ? '' : nome.split(' ').slice(0 , 1)}</Span>, ocorreu um erro ao avisar a sua chegada,<br/>
        procure alguém na recepção para ajudá-lo(a), ou tente novamente.</h1>
        
        <Button onClick={() => {
          clearTimeout()
          router.push({
            pathname: '/',
          })
        }}>
          Início
        </Button>
      </Widget.Content> 
    </Background>
  );
}
