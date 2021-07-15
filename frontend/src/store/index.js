import { createStore } from 'redux';
import reducer from './reducers';

//-----------------------|| REDUX - MAIN STORE ||-----------------------//

const store = createStore(reducer);

export { store };