import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Widget from '../src/components/Widget';
import BackgroundInputs from '../src/components/BackgroundInputs';
import { useRouter } from 'next/router';
import api from '../utils/api';

const Select = styled.select`
  z-index: 10;
  top: 0;
  background: white;
  padding: 1vh 1.5vw;
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

    &:disabled {
    opacity: 0.6;
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
  const {perfil, email} = router.query;

  const [ celular, setCelular ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ quemVisitou, setQuemVisitou ] = useState('');
  const [ validation, setValidation ] = useState([false, false, false]);
  const [ aceite, setAceite ] = useState('sim');
  const [ hosts, setHosts ] = useState([]);
  const [onLoad, setOnLoad] = useState(false);

  
  useEffect( () => {
    async function fetchData() {
      setOnLoad(true);
      const response = await api.get('api/index-hosts');
      setHosts(response.data);
      const visitorResponse = await api.post('api/check-visitor', {
        email
      });
      
      console.log(visitorResponse)
      const {visitor, registered} =  visitorResponse.data
      if (registered) {
        setNome(visitor.nome)
        setCelular(visitor.celular)
        setAceite(visitor.aceite)
        setValidation([true, true, false])
      }
      setOnLoad(false);
    }
    fetchData();
  }, [])

  const handleSubmit = async () => {
    setOnLoad(true);
    const response = await api.post('api/arrived',{
      nome,
      email,
      celular,
      aceite,
      quemvisitou: quemVisitou,
      perfil
    })
    setOnLoad(false);

    if(response.status === 201) {
      router.push({
        pathname: '/confirmacao',
        query: {
          nome : nome
        }
        })
    }

    if(response.status === 400) {
      router.push({
        pathname: '/erro',
        query: {
          nome : nome
        }
        })
    }
  }
    
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
                  <Widget.Input 
                  type="text" 
                  placeholder="Nome" 
                  value={nome}
                  disabled={onLoad}
                  onChange={e => {
                    setNome(e.target.value);
                    let newValidation = validation;
                    if (e.target.value.length > 1) {
                      newValidation[0] = true;
                      setValidation(newValidation)
                    } else {
                      newValidation[0] = false;
                      setValidation(newValidation)
                    }
                  }} />
                  <Widget.P>
                      Celular
                  </Widget.P>
                  <Widget.InputMask 
                  autoComplete= "off"
                  disabled={onLoad}
                  mask='(99) 99999-9999' 
                  maskChar=''
                  value={celular} 
                  type="phone"
                  placeholder="(00) 00000-0000" 
                  id="tel" 
                  onChange={e => {
                    setCelular(e.target.value)
                    let newValidation = validation;
                    if (e.target.value.length === 15) {
                      newValidation[1] = true;
                      setValidation(newValidation)
                    } else {
                      newValidation[1] = false;
                      setValidation(newValidation)
                    }
                  }}/>
                  <Widget.P>
                    Vai se encontrar com: 
                  </Widget.P>
                  <Select
                  name="cars"
                  id="cars"
                  value={quemVisitou}
                  disabled={onLoad}
                  onChange={e => {
                    setQuemVisitou(e.target.value);
                    let newValidation = validation;
                    if (e.target.value.length > 0) {
                      newValidation[2] = true;
                      setValidation(newValidation)
                    } else {
                      newValidation[2] = false;
                      setValidation(newValidation)
                    }
                  }}>
                    <option value="">Selecione</option>
                    {hosts.map((host, index) => {
                      if(host.ativo === 'não') {
                        return
                      }
                      return (
                        <option key={index} value={host.nome_usuario}>{host.nome_usuario}</option>
                      )
                    })}
                  </Select>
                  
                  <ContainerSwitch>
                    <Switch type="checkbox" checked={aceite === 'sim' ? true : false} onChange={ e => {
                        setAceite(aceite === 'sim' ? 'não' : 'sim')

                        
                    }}></Switch>
                    <Widget.P>Aceito receber contatos da Mandarin</Widget.P>
                  </ContainerSwitch>

                  <Widget.Section>
                      <Widget.Button onClick={() => 
                        router.push({
                        pathname: '/email',
                        query: {perfil}
                        })
                        }>
                          Voltar
                      </Widget.Button>
                      {
                        onLoad
                        &&
                        <Image src="/spinner.svg" width={50} height={50}></Image>
                      }
                      
                      <Widget.Button
                      disabled={validation.includes(false) ? true : false }
                      onClick={handleSubmit}>Confirmar</Widget.Button>
                  </Widget.Section>
              </Widget.Body>
          </Widget>
        </BackgroundInputs>
  )
}