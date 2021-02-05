import React, { useState } from 'react';
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

export default function Home() {
  const router = useRouter();
  const nome = useState('');
  
  return (
    <Background>
      <Background.Image src="bg.png"/>
      <Head>
        <title>Mandarin - Recepção</title>
      </Head>
     
      <Widget.Content>
        <img src='logo.png' className="LogoMandarin"/>
        <h1>Seja bem-vindo à Mandarin {nome},  já iremos te receber! </h1>
        
        <Button onClick={() => 
        router.push({
          pathname: '/',
        })
        }>
          Início
        </Button>
      </Widget.Content> 
    </Background>
  );
}
