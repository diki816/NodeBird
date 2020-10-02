import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';


import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';

const Signup = () => {

    const dispatch = useDispatch();
    const { signupLoading } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onChangePassword = useCallback( (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
    }, [password] );

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState('');

    const onChangeTerm = useCallback((e) => {
            setTerm(e.target.value);
            setTermError(false);
    }, []);

    const onSubmit = useCallback( () => {
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }

        if(!term) {
            return setTermError(true);
        }

        console.log(id, nickname, password);

        dispatch( {
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        })
    }, [meail, password, passowrdCheck, term]);

    return (
      <AppLayout>
        <head>
          <title> Signup </title>
        </head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <Input
              name="email"
              type="email"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nick">nickname</label>
            <br />
            <Input
              name="user-nick"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">password</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">Password Check</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && <ErrorMessage>Password Check is not same with password!</ErrorMessage>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              Should follow Regulation
            </Checkbox>
            {termError && <ErrorMessage>Please, Agree with Term!</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10}}>
              <Button type="primary" htmlType="submit" loading={signupLoading}>가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    );
}

export default Signup;