import gitHubApi from '../apis/gitHubApi';
import sessionApi from '../apis/sessionApi';

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_SESSION_REPOS = 'FETCH_SESSION_REPOS';

export const fetchRepos = (term) => async dispatch => {
    const respone = await gitHubApi.get(term);

    dispatch({ type: 'FETCH_REPOS', payload: respone.data.items })
};

export const fetchSessionRepos = () => async dispatch => {
    const respone = await sessionApi.get('/getRepos');

    dispatch({ type: 'FETCH_SESSION_REPOS', payload: respone.data })
};