import React, { Component } from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from './actions/actionCreater';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            task: ""
        };
    }

   handleSubmit = (e) => {
       e.preventDefault();
        this.props.dispatch({
            type: ADD_TODO,
            task: this.state.task
        });
        this.setState({task: ""});
       console.warn("Submit clicked!");
       e.target.reset();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleRemove = (id) => {
        this.props.dispatch({
            type: REMOVE_TODO,
            id
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Task</label>
                    <input type="text" id="task" name="task" onChange={this.handleChange} />
                    <button>Add a todo!</button>
                </form>
                <ul>
                    {this.props.todos.map((todo,index) => <Todo key={index} task={todo.task} id={todo.id} onRemove={this.handleRemove}/>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(globalState) {
    // debugger;
    const temp = {
        todos: globalState.todos
    };
    return temp;
}

export default connect(mapStateToProps)(TodoList);