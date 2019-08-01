import React, { Component } from 'react';
import { Provider } from 'react-redux'; 

import TodoList from '../TodoList';
import Counter from '../Counter';

import store from '../../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList /> 
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App;