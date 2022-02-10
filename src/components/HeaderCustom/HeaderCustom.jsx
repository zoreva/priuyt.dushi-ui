import React, {useState} from 'react';
import {Link} from 'gatsby';
import {ExtraMenu} from './ExtraMenu';
import {HeaderStyled} from './styles';
import logoPng from '../../images/logo.png';

export const HeaderCustom = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerClickMenu = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

    const setClassMenu = () => (isOpen ? 'is-open' : '');
    return (
        <HeaderStyled className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <img src={logoPng} alt='Приют души' className='header__logo_img' />
                </Link>
            </div>
            <div className={`menu-btn ${setClassMenu()}`} onClick={() => handlerClickMenu()} />
            <div className='header__menu'>
                <div className='header__menu__block header__menu__block-left'>
                    <div className='header__menu__block_item'>
                        <Link to='/об-авторе'>
                            Об авторе<span></span>
                        </Link>

                        <ExtraMenu />
                    </div>
                    <div className='header__menu__block_item'>
                        <Link to='/все-стихи'>
                            Стихи<span></span>
                        </Link>
                    </div>
                </div>
                <div className='header__menu__block header__menu__block-right'>
                    <div className='header__menu__block_item'>
                        <Link to='/все-рассказы'>
                            Рассказы<span></span>
                        </Link>
                    </div>
                    <div className='header__menu__block_item'>
                        <Link to='/контакты'>
                            Контакты<span></span>
                        </Link>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
};
