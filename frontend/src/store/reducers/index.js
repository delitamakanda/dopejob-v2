import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './auth';
import responsiveReducer from './responsive';
import searchReducer from './search';

//-----------------------|| COMBINE REDUCER ||-----------------------//

export default combineReducers({
    customization: customizationReducer,
    auth: authReducer,
    responsive: responsiveReducer,
    search: searchReducer
});
