import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

//const { default: AppLayout } = require("../components/AppLayout")

const Home = () => {
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