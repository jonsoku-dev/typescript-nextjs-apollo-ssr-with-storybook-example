import styled, { css } from 'styled-components';
import { mq } from '../../../styles/mq';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    ${mq('dt')`
        width: 640px;
        margin: 0 auto;
    `};
    ${({ theme }) => css`
        grid-template-rows:
            ${theme.appHeader}
            minmax(calc(100vh - ${theme.appHeader} - ${theme.appFooter}), 1fr)
            ${theme.appFooter};
    `};
`;
export const Top = styled.div`
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    align-items: center;
    justify-items: center;
    ${({ theme }) => css`
        ${theme.fonts.headerTitle};
    `}
    > div {
        display: flex;
        align-items: center;
        > svg {
            font-size: 2rem;
            cursor: pointer;
        }
    }
`;
export const Middle = styled.div`
    ${({ theme }) => css`
        ${theme.fonts.default};
    `}
`;
export const Bottom = styled.div`
    font-size: 1rem;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
`;