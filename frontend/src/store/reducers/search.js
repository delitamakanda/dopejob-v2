import {
    SEARCH_MOBILE_OPEN,
    SEARCH_TEXT_CHANGE,
    SEARCH_SET,
    SEARCH_APPEND,
    SEARCH_LOADER_STATE,
    SEARCH_RESET
} from '../constants';

const initialState = {
    loading: true,
    input_value: '',
    is_load_more_visible: false,
    show_mobile_search: false,
    data: []
};

export default function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SEARCH_TEXT_CHANGE:
            return Object.assign({}, state, {
                loading: true,
                input_value: action.payload.input_value
            });

        case SEARCH_SET:
            return Object.assign({}, state, {
                data: action.payload.data,
                loading: false
            });

        case SEARCH_APPEND:
            return Object.assign({}, state, {
                data: state.data.concat(action.payload.data),
                loading: false
            });

        case SEARCH_LOADER_STATE:
            return Object.assign({}, state, {
                loading: true
            });

        case SEARCH_RESET:
            return Object.assign({}, state, {
                ...initialState,
                show_mobile_search: false,
                input_value: action.payload.input_value
            });

        case SEARCH_MOBILE_OPEN:
            return Object.assign({}, state, {
                show_mobile_search: true
            });

        default:
            return state;
    }
}
