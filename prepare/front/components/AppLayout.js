import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
//import styled from 'styled-components';
import { useSelector } from "react-redux";

import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
/* 
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`
;
 */
const AppLayout = ( {children} ) => {
    // replace with redux
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>Node-Bird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item> 
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* <Col xs={24} md={6}>  {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/> } </Col>  */}
                <Col xs={24} md={6}>  { me ? <UserProfile /> : <LoginForm /> } </Col>
                <Col xs={24} md={12}> {children} </Col>
                <Col xs={24} md={6}> <a href="http://blog.naver.com/dikisun" target="_blank" rel="noreferrer noopener"> Made by DIKISUN</a> </Col>
            </Row>
            
        </div>
    );
}


export default AppLayout