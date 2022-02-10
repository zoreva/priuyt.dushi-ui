import React from 'react';
import {Background} from '../components/Background';
import {FooterCustom} from '../components/FooterCustom';
import {HeaderCustom} from '../components/HeaderCustom';

const Favorite = () => {
    return (
        <>
            <Background />
            <HeaderCustom />
            <main>Favorite page test</main>
            <FooterCustom />
        </>
    );
};

export default Favorite;
