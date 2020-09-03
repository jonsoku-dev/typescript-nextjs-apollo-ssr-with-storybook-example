import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    font-size: 1.2rem;
    a {
        width: 100%;
        text-align: center;
    }
`;

interface OwnProps {
    onClick?: any;
    href: string;
    name: string;
}

type Props = OwnProps;

const AuthMenuItem: FunctionComponent<Props> = ({ onClick, href, name }) => {
    return (
        <Wrapper onClick={onClick}>
            <Link href={href}>
                <a>{name}</a>
            </Link>
        </Wrapper>
    );
};

export default AuthMenuItem;
