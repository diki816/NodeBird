import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const initialState = {
    /* move to user.js
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    */
    /* move to post.js
   post: {
        mainPosts: [],
    },
    */
};
/* move to user.js
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    };
};
export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    };
};
*/

const rootReducer = combineReducers({
//const rootReducer = (state = initialState, action) => {    
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return {...state, ...action.payload };
/* move to user.js
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
*/        
            default:
                return state;
        }
    }, 
    user,
    post,
});


export default rootReducer;
/* 설명용
const initialState =- {
    name: 'zerocho',
    age: 27,
    passworrd: 'babo',
};
*/
/* 객체이므로 매번 정의하는 반복제거 필요
const changeNickname = {
    type: 'CHANGE_NICKNAME',
    data: 'boogicho',
};
*/
/* 설명용
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
};

changeNickname('boogicho');

// {이전상태, 액션} => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data,
            }
    }
}
*/
