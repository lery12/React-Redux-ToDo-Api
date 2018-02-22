import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeToDo} from "../actions";

class ToDoItemDetail extends Component {
    render() {
        const handleRemove = (id) => {
            this.props.removeToDo(this.props.id);
        }


        if (this.props.display) {
            return (
                <div className="card">
                    <div className="card-block">
                        <h6 className="card-subtitle mb-2 text-muted">Date: {this.props.date}</h6>
                        <button type="button" className="btn btn-sm btn-danger" onClick={handleRemove}>Remove</button>
                    </div>
                </div>
            );
        } else {
            return (
                <span></span>
            );
        }

    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removeToDo: removeToDo}, dispatch);
}


export default connect(null, mapDispatchToProps)(ToDoItemDetail);
