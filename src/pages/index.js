import React from 'react';
import {Background} from '../components/Background';
import {Container} from '../components/Container';
import {FooterCustom} from '../components/FooterCustom';
import {HeaderCustom} from '../components/HeaderCustom';

const MainPage = () => {
    return (
        <main>
            <Background />
            <HeaderCustom />
            <main>
                <Container>
                    <h1>Новости</h1>
                    <ul>
                        <li>
                            <h4>
                                Сетевая трилогия рязанской писательницы заставляет задуматься о роскоши человеческого
                                общения
                            </h4>
                            <a
                                href='https://www.novgaz-rzn.ru/nomer30082012_34/884.html'
                                target='_blank'
                                rel='noreferrer'
                            >
                                ссылка
                            </a>
                        </li>
                    </ul>
                </Container>
            </main>
            <FooterCustom />
        </main>
    );
};

export default MainPage;
