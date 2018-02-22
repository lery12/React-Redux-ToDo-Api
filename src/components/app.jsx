import React, {Component} from 'react';
import ToDoInput from '../containers/ToDoInput';
import ToDoList from '../containers/ToDoList';

export default class App extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <h2 className="DoToTitle">My ToDo App</h2>
                <ToDoInput />
                <ToDoList />
            </div>


        );
    }
}

