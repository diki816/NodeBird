import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {Card, Avatar, Button} from 'antd';

import { logoutAction } from '../reducers';


const UserProfile = ( {setIsLoggedIn} ) => {

    const onLogOut = useCallback( () => {
        //setIsLoggedIn(false);
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