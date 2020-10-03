import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../reducers/post';

//const { default: AppLayout } = require("../components/AppLayout")

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQEST,
        });
    },[]);
    
    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {me && <PostForm/>}
            {/* index는 키로 사용하면 안된다. anti-pattern */}
            {mainPosts.map((c) => {
                return (<PostCard key={c.id} post={c} />);
            })}
        </AppLayout>
    );
};

export default Home;