export const initialState = {
    mainPosts: [{
        //대소문자 의미가 있음: 소문자는 싱글, 대문자는 복합
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해스태그 #익스프레스',
        Images: [ {
            src: 'http://asp1.iquick4u.com/iquick/KSD/pimg/m_01.gif'
        }, {
            src: 'http://asp1.iquick4u.com/iquick/KSD/pimg/m_999.gif'
        }, {
            src: 'http://asp1.iquick4u.com/iquick/KSD/pimg/m_12.gif'
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            contetn: '우와 개정판이 나왔다!',
        }, {
            User: {
                nickname: 'hero',
            },
            contetn: '히히 나도나도',
        },]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: 'dumy dumdum',
    User: {
        id: 1,
        nickname: 'zerocho',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;