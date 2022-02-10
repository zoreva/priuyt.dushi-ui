import React from 'react';
import {useRecoilState} from 'recoil';
import {paginationStateAtom} from './atom';
import {useQuery} from 'react-query';
import {Container} from '../../Container';
import {getPoetryList} from './api';
import {ErrorMessage} from './components/ErrorMessage';
import {Pagination} from './components/Pagination';
import {PoetryItem} from './components/PoetryItem';
import {CommonWrapper} from './styles';

export const PoetryDashboard = () => {
    const [currentPage, setCurrentPage] = useRecoilState(paginationStateAtom);

    const {
        data: poetryList,
        isLoading,
        isError,
    } = useQuery(['poetryList', currentPage], () => getPoetryList(currentPage));

    if (isError) return <ErrorMessage />;

    return (
        <>
            <Container>
                <CommonWrapper>
                    {!isLoading && poetryList.data.array.map((item) => <PoetryItem {...item} key={item.id} />)}

                    {isLoading && <p>Идёт загрузка...</p>}

                    {!isLoading && (
                        <Pagination pageCounter={poetryList.data.pageCounter} />
                    )}
                </CommonWrapper>
            </Container>
        </>
    );
};
