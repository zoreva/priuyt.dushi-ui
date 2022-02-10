import React from 'react';
import styled from 'styled-components';
import {Background} from '../components/Background';
import {Container} from '../components/Container';
import {FooterCustom} from '../components/FooterCustom';
import {HeaderCustom} from '../components/HeaderCustom';

const Contacts = () => {
    return (
        <>
            <Background url={'https://img1.picmix.com/output/pic/normal/1/8/7/7/8177781_22678.gif'} />
            <HeaderCustom />
            <main>
                <Container>
                    <h1 className='common__title'>Контакты</h1>
                    <ListStyled>
                        <ItemListStyled>
                            <strong className={'contacts_list_item_name'}>Почта:</strong>
                            <a href={'mailto:kek@mail.ru'} className={'contacts_list_item_link'}>
                                zoreva@mail.ru<span></span>
                            </a>
                        </ItemListStyled>
                        <ItemListStyled>
                            <strong className={'contacts_list_item_name'}>Instagram:</strong>
                            <a
                                href={'https://instagram.com/zoreva.priuyt.dyshi'}
                                className={'contacts_list_item_link'}
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                @zoreva.priuyt.dyshi<span></span>
                            </a>
                        </ItemListStyled>
                        <ItemListStyled>
                            <strong className={'contacts_list_item_name'}>Группа Вконтакте:</strong>
                            <a
                                href={'https://vk.com'}
                                className={'contacts_list_item_link'}
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                zoreva.priuyt.dyshi<span></span>
                            </a>
                        </ItemListStyled>
                    </ListStyled>
                </Container>
            </main>
            <FooterCustom />
        </>
    );
};

const ListStyled = styled.ul`
    list-style: none;
`;

const ItemListStyled = styled.li`
    border-left: 10px solid #f0ffff;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
        border-left: 10px solid #8d8d8d;
    }
`;

export default Contacts;
