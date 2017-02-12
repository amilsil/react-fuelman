import courseReducer from './courseReducer';
import counterReducer from './counterReducer';
import postsReducer from './postsReducer';

export default function combined (state = {}, action) {
    return {
        count: counterReducer(state.count, action),
        courses: courseReducer(state.courses, action),
        posts: postsReducer(state.posts, action)
    };
}
