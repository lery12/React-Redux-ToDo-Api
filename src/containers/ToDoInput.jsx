import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {addToDo, fetchItem} from '../actions/index';


class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTitle: ''
        };
    }

    onInputChange = (event) => {
        this.setState({
            itemTitle: event.target.value
        });
    }
    findToDoId = () => {
        let idNmb = 0;
        this.props.ToDoItems.map((id => {
            if (idNmb <= id.id) {
                idNmb = id.id + 1;
            }
        }));
        return idNmb;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addToDo(this.state.itemTitle, this.findToDoId());
        this.setState({
            itemTitle: ""
        });
    }
    generateQuote = (event) => {
        event.preventDefault();

        this.props.fetchItem(this.findToDoId());
    }

    render() {
        return (
            <form className="input-group ToDoInput">
                <input className="form-control" value={this.state.itemTitle} onChange={this.onInputChange}
                       onSubmit={this.handleSubmit}/>
                <span className="input-group-btn">
                    <button className="btn btn-primary"
                            onClick={this.handleSubmit}>ADD IT</button>
                     <button className="btn btn-info"
                             onClick={this.generateQuote}>Generate</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        ToDoItems: state.ToDoItems
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addToDo: addToDo, fetchItem: fetchItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput);
