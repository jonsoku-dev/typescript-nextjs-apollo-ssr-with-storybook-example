import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
`;

interface OwnProps {
    onClickBackDrop: any;
}

type Props = OwnProps;

const BackDrop: FunctionComponent<Props> = ({ onClickBackDrop }) => {
    return <Wrapper onClick={onClickBackDrop} />;
};

export default BackDrop;
