import * as type from '../actions/actionTypes';

export default function postsReducer(state = [], action) {
    switch(action.type) {
        case type.POSTS_FETCH_SUCCEEDED:  
            return action.posts;
        default: 
            return state;
    }
}