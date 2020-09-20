import React, {useState, useCallback, useMemo} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequestAction} from '../reducers/user';

const ButtonWraaper = styled.div `
    margin-top: 10px;
`;
//redux 적용
//const LoginForm = ( {setIsLoggedIn} ) => {
const LoginForm = () => {

    const dispatch = useDispatch();
    const { isLoggingIn } = useSelector((state) => state.user)
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback( (e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback( (e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback( () => {
        console.log(id, password);
        //setIsLoggedIn(true);
        dispatch(loginRequestAction({id, password}));
    }, [id, password])
    {/* anothet for preventing object refreshing using 'useMemo()'*/}
    const style = useMemo(() => ({ marginTop: 10}), []);

    const FormWrapper = styled(Form) `
        padding: 10px;
    `;

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>

            </div>

            <div>
                <label htmlFor="user-password">password</label>
                <br/>
                <Input name ="user-password" type="password" value={password} onChange={onChangePassword} required/>
            </div>

            
            {/* 
                refresh automatically because 'style={{marginTop:10}}' is an object'
            <div style={{ marginTop: 10}}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>Register</Button></a></Link>
            </div> 
            */}
            
            <ButtonWraaper>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>Register</Button></a></Link>
            </ButtonWraaper>
        </FormWrapper>
    );
}

export default LoginForm;