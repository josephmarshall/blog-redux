import { combineReducers, } from 'redux';
import blogs from './blogs';
import posts from './posts'

const rootReducer = combineReducers({
  blogs,
  posts,
});

export default rootReducer;