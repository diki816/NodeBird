import React, {useState, useCallback, useMemo} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import {useDispatch, useSelector, useInput} from 'react-redux';
import {loginRequestAction} from '../reducers/user';

const ButtonWraaper = styled.div `
    margin-top: 10px;
`;
//redux 적용
//const LoginForm = ( {setIsLoggedIn} ) => {
const LoginForm = () => {

    const dispatch = useDispatch();
    //const { isLoggingIn } = useSelector((state) => state.user)
    const { logInLoading } = useSelector((state) => state.user)
    const [id, setId] = useInput('');
    const [password, setPassword] = useInput('');

    const onChangeId = useCallback( (e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback( (e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback( () => {
        console.log(email, password);
        //setIsLoggedIn(true);
        dispatch(loginRequestAction({email, password}));
    }, [email, password])
    {/* anothet for preventing object refreshing using 'useMemo()'*/}
    const style = useMemo(() => ({ marginTop: 10}), []);

    const FormWrapper = styled(Form) `
        padding: 10px;
    `;

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">e-mail</label>
                <br/>
                <Input name="user-email" value={email} onChange={onChangeEmail} required/>

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
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>Register</Button></a></Link>
            </ButtonWraaper>
        </FormWrapper>
    );
}

export default LoginForm;