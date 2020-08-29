import React, {useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';


const UserProfile = ( {setIsLoggedIn} ) => {

    const onLogOut = useCallback( () => {
        setIsLoggedIn(false);
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