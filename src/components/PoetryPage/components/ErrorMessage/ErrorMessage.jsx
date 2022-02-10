import React from 'react';
import {Container} from '../../../Container';
import {CommonWrapper} from '../../styles';

export const ErrorMessage = () => {
    return (
        <Container>
            <CommonWrapper>
                <p>Произошла ошибка. Попробуйте перезагрузить страницу.</p>
            </CommonWrapper>
        </Container>
    );
}