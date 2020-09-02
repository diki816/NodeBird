import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../reducers/user';

//appy redux
//const UserProfile = ( {setIsLoggedIn} ) => {

const UserProfile = () => {

    const dispatch = useDispatch();

    const onLogOut = useCallback( () => {
        //setIsLoggedIn(false);
        //dispatch(logoutAction);
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