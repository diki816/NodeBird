import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch} from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment,} from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone, } from '@ant-design/icons';
import CommentForm from './CommentForm';

import FollowButton from "./FollowButton";
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const CardWrapper = styled.div`
    margin-bottom: 20px;
`;

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const me = useSelector((state) => state.user);
  const id = me && me.id; // me?.id

  const [liked, setLiked] = useState(false);
  
  const onToggleLiked = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatchEvent({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, []);

  return (
    <CardWrapper style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLiked}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLiked} />
          ),
          <HeartOutlined key="heart" />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>Update</Button>
                    <Button type="danger" onClick="onRemovePost" loading={removePostLoading}>Delete</Button>
                  </>
                ) : (
                  <Button>Report</Button>
                )}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}

        extra={<FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link herf={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`} >
                        <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
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