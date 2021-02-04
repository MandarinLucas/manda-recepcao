import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import Widget from '../src/components/Widget';
import Background from '../src/components/Background'
// import BackgroundInputs from '../src/components/BackgroundInputs';
// import Widget from '../src/components/Widget';



const Button = styled.div`
  display: flex;
  justify-content: center;
  background: #00C389;
  padding: 2vh 2vh;
  max-width: 25.391vw;
  border-radius: 0.5em;
  color: white;
`

const BackgroundImg = styled.div`

`

export default function Home() {
  return (
    <Background>
      <Background.Image src="bg.png"/>
      <Head>
        <title>Mandarin - Recepção</title>
      </Head>
     
        <Widget.Content>
          <img src='logo.png' className="LogoMandarin"/>
        </Widget.Content>
              
    </Background>
  );
}
