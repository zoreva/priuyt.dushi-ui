import styled from 'styled-components';

export const AsideStyled = styled.aside`
    position: absolute;
    top: 70px;
    left: 0;
`;

export const ExtraButton = styled.div`
    display: inline;
    cursor: pointer;
    white-space: nowrap;

    div {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background: #f0ffff;
        margin: 2px;
    }
    &:hover {
        div {
            background: #dadada;
        }
    }
`;

export const Menu = styled.div`
    display: block;
    position: relative;
    transition: all 0.3s ease-in-out;
    margin-top: 30px;
`;

export const MenuItem = styled.div`
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
    a {
        text-decoration: none;
        font-size: 32px;
    }
`;

export const FavButton = styled.svg`
    fill: azure;
    width: 20px;
    height: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
        fill: rgb(238, 50, 50);
    }
`;

export const InstBtn = styled.div`
    display: block;
`;

export const InstIcon = styled.svg`
    fill: #f0ffff;
    width: 20px;
    height: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
        fill: rgb(238, 50, 50);
    }
`;
