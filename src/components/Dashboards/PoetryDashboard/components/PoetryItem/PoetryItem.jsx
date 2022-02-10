import React from 'react';
import {Wrapper, Column, ColumnTitle} from './styles';

export const PoetryItem = ({id, title, poetryType, createDate, book}) => {
    return (
        <Wrapper to={`/стих/${id}`}>
            <ColumnTitle>{title}</ColumnTitle>
            <Column>{poetryType}</Column>
            <Column>{createDate}</Column>
            <Column>{book}</Column>
            <Column>{`${createDate} Просмотров`}</Column>
        </Wrapper>
    );
};
