import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools());
