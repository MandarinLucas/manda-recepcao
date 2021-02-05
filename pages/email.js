import React, { useState } from 'react';
import Head from 'next/head';
import Widget from '../src/components/Widget';
import BackgroundInputs from '../src/components/BackgroundInputs';
import { useRouter } from 'next/router';


export default function Email() {
    const [email, setEmail] = useState('');
    const router = useRouter();
    const {perfil} = router.query
    console.log(email);

    function validationEmail() {
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        const emailLowerCase = email.toLocaleLowerCase();

        if (!regexEmail.test(emailLowerCase)) {
        alert('Digite um email válido');
        return;
        }  
        router.push({
        pathname: '/formulario',
        query: {
            perfil,
            email
        }
        })
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
                        Seu e-mail
                    </Widget.P>
                    <Widget.Input type="email" placeholder="E-mail" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                    <Widget.Section>
                        <Widget.Button onClick={() => 
                            router.push({
                            pathname: '/'
                            })
                            }>
                                Voltar              
                        </Widget.Button>
                        <Widget.Button 
                        onClick={validationEmail}>
                                Avançar
                        </Widget.Button>
                    </Widget.Section>
                </Widget.Body>
            </Widget>
        </BackgroundInputs>
     )
}