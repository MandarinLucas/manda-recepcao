import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Widget from '../src/components/Widget';
import BackgroundInputs from '../src/components/BackgroundInputs';
import { useRouter } from 'next/router';

const Select = styled.select`
  z-index: 10;
  top: 0;
  background: white;
  padding: 1vh 3vw;
  margin: 0 0 2vh 0;
  font-size: 1.375em;
  border-radius: 0.5em;
  border: none;
  color: #333333;
  width: 74vw;
  height: 6vh;

  &:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
    -moz-box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
    box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
  }
`;

const ContainerSwitch =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 40px 0;
`

const Switch = styled.input `
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 72px;
    height: 32px;
    padding: 0;
    margin: 0 10px 0 0;
    background: #ccc;
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    box-shadow: 5px 8px 17px rgba(0, 0, 0, 0);
&:checked {
    background: #00C389;
}
&:after {
    position: absolute;
    content: "";
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #fff;
    -webkit-box-shadow: 0 0 .25em rgba(0, 0, 0, .3);
    box-shadow: 0 0 .25em rgba(0, 0, 0, .3);
    -webkit-transform: scale(.7);
    transform: scale(.7);
    left: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

&:checked:after {
    left: calc(100% - 32px);
}
`

export default function Formulario() {
  const router = useRouter();
    
    return(
        <BackgroundInputs>
          <BackgroundInputs.Image src="bg2.png" />
          <Head>
              <title>Mandarin - Recepção</title>
          </Head>

          <Widget>
              <Widget.Body>
                  <Widget.P>
                      Seu nome
                  </Widget.P>
                  <Widget.Input type="email" placeholder="Nome" />
                  <Widget.P>
                      Celular
                  </Widget.P>
                  <Widget.Input type="phone" placeholder="(00) 00000-0000" id="tel"/>
                  <Widget.P>
                    Vai se encontrar com: 
                  </Widget.P>
                  <Select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </Select>
                  
                  <ContainerSwitch>
                    <Switch type="checkbox"></Switch>
                    <Widget.P>Aceito receber contatos da Mandarin</Widget.P>
                  </ContainerSwitch>

                  <Widget.Section>
                      <Widget.Button onClick={() => 
                          router.push({
                          pathname: '/email'
                          })
                          }>
                            Voltar
                        </Widget.Button>
                      <Widget.Button>Confirmar</Widget.Button>
                  </Widget.Section>
              </Widget.Body>
          </Widget>
        </BackgroundInputs>
  )
}