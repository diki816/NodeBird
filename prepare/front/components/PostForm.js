import React, { useCallback, useState, useRef, useEffect } from "react";
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
//import { addPost } from '../reducers/post';
import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
    const { imagePaths, addPostLoading, addPostDone } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    //const [text, onChangeText, setText] = useInput('');
    const [text, setText] = useState();

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    
    useEffect( () => {
        if (addPostDone) {
            setText("");
        }
    }, [addPostDone]);

    const onSubmitForm = useCallback(() => {
        //dispatch(addPost(text));
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <Form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmitForm} >
            <Input.TextArea value={text} onChange={onChangeText}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={addPostLoading}>짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block'}}>
                        <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;