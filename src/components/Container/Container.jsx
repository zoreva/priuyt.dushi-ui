import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    * {
        color: #ffffff;
    }
    @media (min-width: 768px) {
        width: 450px;
    }
    @media (min-width: 992px) {
        width: 670px;
    }
    @media (min-width: 1200px) {
        width: 870px;
    }
`;

export const Container = ({children}) => {
    return <Wrapper>{children}</Wrapper>;
};
