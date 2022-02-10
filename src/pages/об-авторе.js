import React from 'react';
import {About} from '../components/About/About';
import {Background} from '../components/Background';
import {Container} from '../components/Container';
import {FooterCustom} from '../components/FooterCustom';
import {HeaderCustom} from '../components/HeaderCustom';

const AboutPage = () => {
    return (
        <>
            <Background url={'https://bestgif.su/_ph/38/2/316479266.gif'} />
            <HeaderCustom />
            <main>
                <Container>
                    <About />
                </Container>
            </main>
            <FooterCustom />
        </>
    );
};

export default AboutPage;
