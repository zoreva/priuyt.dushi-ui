import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    height: 160px;
    .header__logo {
        text-align: center;
    }
    .header__logo a img {
        width: 200px;
    }
    .header__menu {
        display: flex;
        flex-direction: row;
    }
    .menu-btn {
        display: none;
        position: absolute;
        top: 20px;
        right: 10px;
        width: 24px;
        height: 2px;
        background: azure;
    }
    .header__menu__block {
        width: 50%;
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
    }
    .header__menu__block_item {
        position: relative;
        margin: 3px 10px;
    }
    .header__menu__block_item > a {
        position: relative;
        color: azure;
        text-decoration: none;
        font-size: 22px;
        text-transform: uppercase;
        transition: all 0.2s ease-in;
    }
    .header__menu__block_item a span {
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 1px;
        background: azure;
        border-radius: 100%;
        opacity: 0;
        transition: all 0.2s ease-in;
    }
    .header__menu__block_item a:hover span {
        opacity: 1;
        width: 100%;
        left: 0;
    }

    @media all and (max-width: 767px) {
        height: 120px;
        margin-top: 20px;
        .header__logo {
            text-align: left;
        }
        .header__logo a img {
            width: 180px;
        }
        .header__menu {
            position: absolute;
            top: 0;
            right: 0;
            flex-direction: column;
            display: none;
        }
        .is-open + .header__menu {
            display: flex;
            margin-right: 40px;
        }
        .menu-btn {
            display: block;
        }
        .menu-btn:before,
        .menu-btn:after {
            content: '';
            position: absolute;
            left: 0;
            width: 24px;
            height: 2px;
            z-index: 10;
            background: azure;
        }
        .menu-btn:before {
            top: 10px;
        }
        .menu-btn:after {
            top: -10px;
        }
        .header__menu__block {
            flex-direction: column;
            width: auto;
        }
        .header__menu__block_item a {
            font-size: 16px;
        }
    }
    @media all and (max-width: 375px) {
        .header__logo a img {
            width: 150px;
        }
    }
    @media all and (max-width: 320px) {
        .header__logo a img {
            width: 100px;
        }
    }
`;
