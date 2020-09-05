import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment,} from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone, } from '@ant-design/icons';
import CommentForm from './CommentForm';

import PostImages from './PostImages';

const PostCard = ({ post }) => {
    const me = useSelector((state) => state.user);
    const id = me && me.id; // me?.id
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLiked = useCallback( () => {
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback( () => {
        setCommentFormOpened((prev) => !prev);
    }, []);
    return ( 
        <div style={{ marginBottom: 20 }}>
            <Card cover={post.Images[0] && <PostImages images={post.Images} />} 
                actions= {[
                    <RetweetOutlined key="retweet"/>,
                    liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLiked} />
                        : <HeartOutlined key="heart" onClick={onToggleLiked} />,
                    <HeartOutlined key="heart"/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                        {id && post.User.id === id ? ( 
                            <>
                                <Button>Update</Button>
                                <Button type="danger">Delete</Button>
                            </>
                            
                        ) : <Button>Report</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
            {commentFormOpened && (
                <>
                    <div>
                        <CommentForm post={post}/>
                        <List header={`${post.Comments.length}개의 댓글`}
                            itemLayout="horizontal"
                            dataSource={post.Comments}
                            renderItem={(item) => (
                                <li>
                                    <Comment author={item.User.nickname}
                                        avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                        content={item.content}
                                    />
                                </li>
                            )}
                        />
                    </div>
                </>
            )}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}
export default PostCard;