import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Widget from '../src/components/Widget';
import BackgroundInputs from '../src/components/BackgroundInputs';
import { useRouter } from 'next/router';
import Background from '../src/components/Background';


export default function Email() {
    return(
        <BackgroundInputs>
            <BackgroundInputs.Image src="bg2.png" />
            <Head>
                <title>Mandarin - Recepção</title>
            </Head>

        </BackgroundInputs>
     )
}