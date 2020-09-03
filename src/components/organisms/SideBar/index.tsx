import React, { FunctionComponent, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import BackDrop from '../../atoms/BackDrop';
import CommonMenuItem from '../../molecules/CommonMenuItem';
import AuthMenuItem from '../../molecules/AuthMenuItem';
import { useMutation, useQuery } from '@apollo/client';
import {
    CurrentUserDocument,
    CurrentUserQuery,
    LogoutDocument,
    LogoutMutation,
} from '../../../generated/apolloComponents';
import { Auth, Common, MenuContainer, Wrapper } from './styles';

interface OwnProps {
    showMenu: boolean;
    setShowMenu: (menuState: boolean) => void;
}

type Props = OwnProps;

const SideBar: FunctionComponent<Props> = ({ showMenu, setShowMenu }) => {
    const { data, loading } = useQuery<CurrentUserQuery>(CurrentUserDocument);
    const [logoutMutation] = useMutation<LogoutMutation>(LogoutDocument, {
        onError({ message }) {
            alert(message);
        },
        update(cache, { data }) {
            if (!data || !data.logout) {
                return;
            }
            cache.writeQuery({
                query: CurrentUserDocument,
                data: {
                    currentUser: data.logout,
                },
            });
        },
    });

    const onClickLogout = useCallback(async () => {
        setShowMenu(false);
        await logoutMutation();
    }, []);

    if (loading || !data) return <div>Loading ...</div>;

    const isLoggedIn = !!data?.currentUser;

    return (
        <Wrapper>
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu"
                unmountOnExit
                onEnter={() => setShowMenu(true)}
                onExited={() => setShowMenu(false)}
            >
                <MenuContainer>
                    <Common>
                        <CommonMenuItem href={'/'} name={'Home'} onClick={() => setShowMenu(false)} />
                        <CommonMenuItem href={'/notice/all'} name={'Notice'} onClick={() => setShowMenu(false)} />
                        <CommonMenuItem href={'/post/all'} name={'Post'} onClick={() => setShowMenu(false)} />
                        <CommonMenuItem href={'/board/all'} name={'Board'} onClick={() => setShowMenu(false)} />
                    </Common>
                    <Auth>
                        {isLoggedIn ? (
                            <>
                                <AuthMenuItem href={'#'} name={'Profile'} onClick={() => setShowMenu(false)} />
                                <AuthMenuItem href={'#'} name={'Logout'} onClick={onClickLogout} />
                            </>
                        ) : (
                            <>
                                <AuthMenuItem href={'#'} name={'Register'} onClick={() => setShowMenu(false)} />
                                <AuthMenuItem href={'/login'} name={'Login'} onClick={() => setShowMenu(false)} />
                            </>
                        )}
                    </Auth>
                </MenuContainer>
            </CSSTransition>
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu__background"
                unmountOnExit
                onEnter={() => setShowMenu(true)}
                onExited={() => setShowMenu(false)}
            >
                <BackDrop onClickBackDrop={() => setShowMenu(false)} />
            </CSSTransition>
        </Wrapper>
    );
};

export default SideBar;
