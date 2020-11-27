import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followingLoading, unfollowLoading } =  useSelector(state => state.user);
  const isFollowing = me?.Followings.find((y) => y.id === post.User.id);
  const onFollow = useCallback( () => {
    if (isFollowing) {
      dispatch( {
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      })
    }
  }, [isFollowing]);

  return (
    <Button onClick={onFollow} loading={unfollowLoading || followingLoading}>
      {isFollowing ? 'Unfollow' : '팔로우'}
    </Button>
  );
}

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;