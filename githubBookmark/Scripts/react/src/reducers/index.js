import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import sessionReposReducer from './sessionReposReducer';

export default combineReducers({
    repos: reposReducer,
    sessionRepos: sessionReposReducer
});