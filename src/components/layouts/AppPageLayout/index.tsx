import React, { FunctionComponent, useState } from 'react';
import { Menu, Face } from '@material-ui/icons';
import { Wrapper, Bottom, Middle, Top } from './styles';
import SideBar from '../../organisms/SideBar';

interface OwnProps {
    title: string;
}

type Props = OwnProps;

const AppPageLayout: FunctionComponent<Props> = ({ children, title }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
            <Wrapper>
                <Top>
                    <div onClick={() => setShowMenu(true)}>
                        <Menu />
                    </div>
                    <div>{title}</div>
                    <div>
                        <Face />
                    </div>
                </Top>
                <Middle>{children}</Middle>
                <Bottom>ⓒ Tama Corp.</Bottom>
            </Wrapper>
        </>
    );
};

export default AppPageLayout;
