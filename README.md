This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React reduct

There are a few ways to map dispatch to the props.

### Create a method named `mapDispatchToProps` and connect to the target component.

```
function mapStateToProps(globalState) {
  // debugger;
  const temp = {
    todos: globalState.todos
  };
  return temp;
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: task => dispatch({ type: ADD_TODO, task }),
    removeTodo: id => dispatch({ type: REMOVE_TODO, id })
  };
}

// export default connect(mapStateToProps)(TodoList);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
```

### Provide the `mapDispatchToProps` by object destructuring

This way we have to create the action methods like bellow:

```
export function addTodo(task) {
    return {
        type: ADD_TODO,
        task
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}
```

And set the `mapDispatchToProps` like this:

```
export default connect(
  mapStateToProps,
  { removeTodo, addTodo }
)(TodoList);

```

### Don't provide the `mapDispatchToProps`

```
export default connect(mapStateToProps)(TodoList);
```

The way to invoke the event:

```
  handleRemove = id => {
    this.props.dispatch({
      type: REMOVE_TODO,
      id
    });
  };

```

```

    handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({
      type: ADD_TODO,
      task: this.state.task
    });
    this.setState({ task: "" });
    e.target.reset();
};
```
