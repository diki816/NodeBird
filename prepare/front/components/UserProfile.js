import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {Card, Avatar, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../reducers/user';

<<<<<<< HEAD
import { logoutAction } from '../reducers';

=======
//appy redux
//const UserProfile = ( {setIsLoggedIn} ) => {
>>>>>>> 31f11a1593a0a7b4556cb798fe197b8fed24dce7

const UserProfile = () => {

    const dispatch = useDispatch();

    const onLogOut = useCallback( () => {
        //setIsLoggedIn(false);
<<<<<<< HEAD
=======
        //dispatch(logoutAction);
>>>>>>> 31f11a1593a0a7b4556cb798fe197b8fed24dce7
        dispatch(logoutAction());
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
                avatar={<Avatar>DS</Avatar>}
                title="DIKISUN"
            />
            <Button onClick={onLogOut}>Logout</Button>
        </Card>
    );
}

export default UserProfile;