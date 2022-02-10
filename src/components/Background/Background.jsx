import React from 'react';
import {BackgroundStyled} from './styles';
import bgPicture from '../../images/backgroundDefault.gif';

export const Background = ({url}) => {
    return (
        <BackgroundStyled>
            <img src={url || bgPicture} alt='background' />
            <div className='background_wrapper'></div>
        </BackgroundStyled>
    );
};

export default Background;
