import styled, { css } from 'styled-components';

export const Wrapper = styled('div')`
    .menu-enter {
        opacity: 0;
        transform: translateX(-300px);
    }
    .menu-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms, transform 300ms;
    }
    .menu-exit {
        opacity: 1;
    }
    .menu-exit-active {
        opacity: 0;
        transform: translateX(-300px);
        transition: opacity 300ms, transform 300ms;
    }
    .menu__background-enter {
        opacity: 0;
    }
    .menu__background-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .menu__background-exit {
        opacity: 1;
    }
    .menu__background-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`;

export const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 320px;
    height: 100%;
    background-color: #fafafa;
    z-index: 10000;
    padding: ${(props) => props.theme.space * 2}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Common = styled.div`
    display: grid;
    ${({ theme }) => css`
        grid-gap: ${theme.space * 2}px;
    `};
`;
export const Auth = styled.div`
    display: flex;
    ${({ theme }) => css`
        grid-gap: ${theme.space * 2}px;
    `};
`;
