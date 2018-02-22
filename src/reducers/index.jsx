import {combineReducers} from 'redux';
import ToDoItems from './reducer-ToDoItems';

const rootReducer = combineReducers({
    ToDoItems: ToDoItems,
});

export default rootReducer;
