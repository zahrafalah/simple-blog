import { combineReducers } from "redux";
import postsReducers from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({ posts: postsReducers, users: usersReducer });
