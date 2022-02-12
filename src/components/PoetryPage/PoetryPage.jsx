import React from 'react';
import {useQuery} from 'react-query';
import {addPoetryViews, getPoetryById, getPoetryViews} from './api';
import {ErrorMessage} from './components/ErrorMessage';
import {CommonWrapper, ContentPoetry, HeaderInfo} from './styles';

export const PoetryPage = ({id}) => {
    const {data: poetryViews} = useQuery('getPoetryViews', async () => {
        const data = await getPoetryViews(id);
        return data.data ? data.data.counter : 0;
    });

    const {data, isLoading, isError} = useQuery('getPoetryById', async () => {
        const prepareData = await getPoetryById(id);
        return prepareData.data;
    });

   const {data: addViews} = useQuery(['addPoetryViews', 'getPoetryViews'], async () => addPoetryViews(id));

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
                <p>{poetryViews || '0'} Просмотров</p>
            </HeaderInfo>
            <ContentPoetry>
                <pre>{data.contentPoetry}</pre>
            </ContentPoetry>
        </>
    );
};
