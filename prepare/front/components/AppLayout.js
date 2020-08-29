import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`
;

const AppLayout = ( {children} ) => {
    // replace with redux
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLogginIn = useSelector((state) => state.user.isLoggedIn)


    return (
        <div>
            <div>Common Menu</div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>Node-Bird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item> 
                <Menu.Item>
                    {
                        //<Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                    }
                    <SearchInput enterButton></SearchInput>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/* <Col xs={24} md={6}>  {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/> } </Col>  */}
                <Col xs={24} md={6}>  {isLoggedIn ? <UserProfile /> : <LoginForm /> } </Col>
                <Col xs={24} md={12}> {children} </Col>
                <Col xs={24} md={6}> <a href="http://blog.naver.com/dikisun" target="_blank" rel="noreferrer noopener"> Made by DIKISUN</a> </Col>
            </Row>
            
        </div>
    );
}


export default AppLayout