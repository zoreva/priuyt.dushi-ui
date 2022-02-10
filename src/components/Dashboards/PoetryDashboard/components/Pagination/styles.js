import styled from 'styled-components';

export const Wrapper = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;

    ul {
        list-style: none;
        display: flex;
        li {
            padding: 4px 0;
            border: 1px solid #ffffff;
            &:hover {
                color: #0a58ca;
                background-color: #e9ecef;
                border-color: #dee2e6;
            }
            a {
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                min-width: 33px;
                height: 38px;
                align-items: center;
                justify-content: center;
            }
        }
        .previous,
        .next {
            display: none; // disabled prev/next buttons. Has bug for number page
            border-radius: 3px;
            padding-left: 7px;
            padding-right: 7px;
            margin: 0 5px;
        }
        .selected {
            color: #0a58ca;
            background-color: #e9ecef;
            border-color: #dee2e6;
            a {
                color: #0a58ca;
            }
        }
    }
`;
