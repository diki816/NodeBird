import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';


const UserProfile = () => {

    const dispatch = useDispatch();
    //const { me, isLoggingOut } = userSelector((state) => state.user);
    const { me, logOutLoading } = useSelector((state) => state.user);
    const onLogOut = useCallback( () => {
        //setIsLoggedIn(false);
        //dispatch(logoutAction);
        dispatch({
            type: LOG_OUT_REQUEST, 
        });
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">twit<br/>{me.Posts.length}</div>,
                <div key="followings">followings<br/>{me.Followings.length}</div>,
                <div key="followers">followers<br/>{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{me.nickname}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>Logout</Button>
        </Card>
    );
}

export default UserProfile;