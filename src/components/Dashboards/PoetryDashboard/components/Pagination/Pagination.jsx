import React from 'react';
import {useRecoilState} from 'recoil';
import ReactPaginate from 'react-paginate';
import {Wrapper} from './styles';
import {paginationStateAtom} from '../../atom';

export const Pagination = ({pageCounter}) => {
    const [currentPage, setCurrentPage] = useRecoilState(paginationStateAtom);

    return (
        <Wrapper>
            <ReactPaginate
                initialPage={currentPage-1}
                breakLabel='...'
                onClick={(e) => setCurrentPage(Number(e.event.target.innerHTML))}
                pageRangeDisplayed={5}
                pageCount={pageCounter}
                renderOnZeroPageCount={null}
                previousLabel='< Назад'
                nextLabel='Вперёд >'
            />
        </Wrapper>
    );
};
