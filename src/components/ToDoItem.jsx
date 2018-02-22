import React, {Component} from 'react';
import ToDoItemDetail from '../containers/ToDoItemDetail';

class ToDoItem extends Component {

    render() {
        const itemClicked = (item) => {
            this.props.handleClickedItem(item)
        }

        const ToDoItems = (this.props.items.length == 0) ?
            <h6 className="text-center">Pop some TODO in...</h6> :

            this.props.items.map((item) =>
                <span key={item.id}>
                <li
                    className="list-group-item justify-content-between"
                    onClick={(e) => itemClicked(item)}>
                    <b>{item.title}</b>
                </li>
                <ToDoItemDetail display={item.display} date={item.date} id={item.id}/>
                </span>
            );
        return (
            <span>{ToDoItems}</span>
        );
    }
}


export default ToDoItem;
