import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Widget from '../src/components/Widget';
import BackgroundInputs from '../src/components/BackgroundInputs';
import { useRouter } from 'next/router';


export default function Email() {
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
                        Seu e-mail
                    </Widget.P>
                    <Widget.Input type="email" placeholder="E-mail" />

                    <Widget.Section>
                        <Widget.Button onClick={() => 
                            router.push({
                            pathname: '/formulario',
                            query: {
                                perfil: "Fornecedor"
                            }
                            })
                            }>
                                Voltar</Widget.Button>
                        <Widget.Button>Avançar</Widget.Button>
                    </Widget.Section>
                </Widget.Body>
            </Widget>
            

        </BackgroundInputs>
     )
}