import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-saga';
import Router from 'next/router';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../commponents/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    const { me } = useSelector((state) => state.user );

    useEffect( () => {
        if( !(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    if (!me) {
        return null;
    }
    
    return (
        <>
            <Head>
                <title>My Profile | NodeBird</title> //Customize title in '_app.js'
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="Followings" data={me.Followings} />
                <FollowList header="Followers" data={me.Followers} />
            </AppLayout>
        </>
    );

};

export default Profile;