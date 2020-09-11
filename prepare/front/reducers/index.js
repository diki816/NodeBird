import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
   user: {
       isLoggedIn: false,
       user: null,
       signUpData: {},
       loginData: {},
   },
   post: {
       mainPosts: {},
   }
};

export const loginAction = (data) => {
    return {
        type: 'LOG_IN', 
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT', 
    }
}
//atcion creator
const changeNickname = (data) => {
    return { type: 'CHANGE_NICKNAME',
        data,   
    }
}

changeNickname('neue zeal')
/*
// action은 객체 이므로 data가 바뀔때마다 새 객체가 필요
const changeNickname = {
    type: 'CHANGE_NICKNAME',
    data: 'boogicho',
}
*/


// (이전상태, 액샌) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return {...state, ...action.payload };
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn : true,
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn : false,
                }
            };
        default:
            return state;
    };
    /*
    switch ( action.type ) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data,
            }
    }
    */
};

export default rootReducer;