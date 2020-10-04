import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../reducers/post';

//const { default: AppLayout } = require("../components/AppLayout")

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
    
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    },[]);
    
    useEffect( () => {
        function onScroll() {
            //console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);
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