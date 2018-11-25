import _ from 'lodash';
import { FETCH_SESSION_REPOS } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SESSION_REPOS:
            return _.mapKeys(action.payload, "id");
        default:
            return state;
    }
}