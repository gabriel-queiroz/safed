import reducers from './ducks';
import { createStore } from 'redux';

const store = createStore(reducers);

export default store;
