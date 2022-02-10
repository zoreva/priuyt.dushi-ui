import React from 'react';
import {useQuery} from 'react-query';
import {getPoetryById} from './api';
import {ErrorMessage} from './components/ErrorMessage';
import {CommonWrapper, ContentPoetry, HeaderInfo} from './styles';

export const PoetryPage = ({id}) => {
    const {data, isLoading, isError} = useQuery('getPoetryById', async () => {
        const prepareData = await getPoetryById(id);
        return prepareData.data;
    });

    if (isError) return <ErrorMessage />;
    if (isLoading)
        return (
            <CommonWrapper>
                <p>Идёт загрузка...</p>
            </CommonWrapper>
        );

    return (
        <>
            <HeaderInfo>
                <h3>{data.title}</h3>
                <p>Жанр: {data.poetryType}</p>
                <p>{data.viewCounter || '0'} Просмотров</p>
            </HeaderInfo>
            <ContentPoetry>
                <pre>{data.contentPoetry}</pre>
            </ContentPoetry>
        </>
    );
};
