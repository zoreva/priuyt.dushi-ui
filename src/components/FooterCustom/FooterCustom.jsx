import React from 'react';
import {Link} from 'gatsby';
import {FooterStyled, FooterBlock} from './styles';

export const FooterCustom = () => {
    return (
        <FooterStyled>
            <FooterBlock>
                <p>Карта сайта</p>
                <Link to='/'>Главная</Link>
                <Link to='/об-авторе'>Об авторе</Link>
                <Link to='/все-стихи'>Стихи</Link>
                <Link to='/все-рассказы'>Рассказы</Link>
                <Link to='/избранное'>Избранное</Link>
                <Link to='/контакты'>Контакты</Link>
            </FooterBlock>
            <FooterBlock>
                <p>"Приют души" - авторский портал Людмилы Ремизовой. {`${new Date().getFullYear()}`}</p>
                <p>Копирование материалов сайта без соглашения автора строго запрещено!</p>
            </FooterBlock>
            <FooterBlock>
                <p>Разработано в веб-студии</p>
                <a href='https://webreznov.site' target='_blank' rel='noreferrer'>WEBREZNOV</a>
            </FooterBlock>
        </FooterStyled>
    );
};
