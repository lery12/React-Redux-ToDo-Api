import React, {Component} from 'react';
import ToDoItem from '../components/ToDoItem';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {selectToDo} from '../actions/index';


class ToDoList extends Component {

    render() {
        const handleClickedItem = (item) => {
            this.props.selectToDo(item);
        }
        return (
            <ul className="list-group">
                <ToDoItem items={this.props.ToDoItems} handleClickedItem={handleClickedItem}/>
            </ul>
        );
    }
}


function mapStateToProps(state) {
    return {
        ToDoItems: state.ToDoItems
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectToDo: selectToDo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
