import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {logoutRequestAction} from '../reducers/user';

//appy redux
//const UserProfile = ( {setIsLoggedIn} ) => {

const UserProfile = () => {

    const dispatch = useDispatch();
    const { me, isLoggingOut } = userSelector((state) => state.user);

    const onLogOut = useCallback( () => {
        //setIsLoggedIn(false);
        //dispatch(logoutAction);
        dispatch(logoutRequestAction());
    },[]);

    return (
        <Card
            actions={[
                <div key="twit">twit<br/>0</div>,
                <div key="followings">followings<br/>0</div>,
                <div key="followers">followers<br/>0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{me.nickname}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={isLoggingOut}>Logout</Button>
        </Card>
    );
}

export default UserProfile;