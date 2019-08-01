import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    newTodoText: '',
  }

  getNewTodo = (e) => {
    this.setState({
      newTodoText: e.target.value
    })
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: ''});
  }

  render() {
    return (
      <div>
        <strong>Digite umo novo todo</strong>
        <input type="text" 
          value={this.state.newTodoText}
          onChange={this.getNewTodo}  
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);