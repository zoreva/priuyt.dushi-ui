import styled from 'styled-components';

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 80px;
    padding-bottom: 80px;
    @media all and (min-width: 768px) and (max-width: 1280px) {
        padding-left: 30px;
        padding-right: 30px;
    }
    @media all and (max-width: 767px) {
        flex-direction: column;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const FooterBlock = styled.div`
    max-width: 300px;
    p,
    a {
        font-size: 13px;
        color: #f0ffff;
    }
    a {
        text-decoration: none;
        display: block;
    }
    @media all and (min-width: 768px) and (max-width: 1280px) {
        max-width: 200px;
    }
    @media all and (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 20px;
    }
`;
