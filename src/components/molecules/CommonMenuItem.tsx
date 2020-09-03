import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    ${({ theme }) => css`
        ${theme.fonts.title};
        padding: ${theme.space * 2}px;
    `};
    a {
        display: block;
        width: 100%;
    }
`;

interface OwnProps {
    onClick?: any;
    href: string;
    name: string;
}

type Props = OwnProps;

const CommonMenuItem: FunctionComponent<Props> = ({ onClick, href, name }) => {
    return (
        <Wrapper onClick={onClick}>
            <Link href={href}>
                <a>{name}</a>
            </Link>
        </Wrapper>
    );
};

export default CommonMenuItem;
