import styled from 'styled-components';
import {Link} from 'gatsby';

export const Wrapper = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: row;
    color: #f0ffff;
    text-decoration: none;
    font-size: 22px;
    margin: 17px 0;
    transition: all 0.2s ease-in;
    &:hover {
        background: rgba(240, 255, 255, 0.514);
        text-shadow: none;
        cursor: pointer;
    }
`;

export const Column = styled.span`
    text-align: center;
    width: 25%;
`;

export const ColumnTitle = styled.span`
    text-align: left;
    width: 25%;
`;