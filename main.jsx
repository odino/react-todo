import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { createStore } from 'redux'
import Filters from './components/Filters'
import List from './components/List'
import NewTodo from './components/NewTodo'
require("./main.css");

function reducer(state = {}, action) {
  let todos;
  switch (action.type) {
  case 'TODO_CHECK':
    todos = [...state.todos]
    todos[action.id].done = !todos[action.id].done

    return {...state, todos: todos}
  case 'TODO_UPDATE':
    todos = [...state.todos]
    todos[action.id].title = action.title

    return {...state, todos: todos}
  case 'TODO_CREATE':
    todos = [...state.todos]
    let todo = {done: action.done || false, title: action.title || ''}

    if (action.id) {
      todos.splice(action.id, 0, todo)
    } else {
      todos.push(todo)
    }


    return {...state, todos: todos}
  case 'TODO_DELETE':
    todos = [...state.todos]
    todos.splice(action.id, 1)

    return {...state, todos: todos}
  case 'TODO_FILTER':
    return {...state, filter: action.filter}
  default:
    return state
  }
}

let initialState = JSON.parse(localStorage.getItem('state')) || {todos: [], filter: {}}
let store = createStore(reducer, initialState)

window.todos = {
  add: (todo) => {
    store.dispatch({
      ...todo,
      type: 'TODO_CREATE'
    })
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {...store.getState(), dispatch: store.dispatch}

    store.subscribe(() => {
      let state = store.getState()
      this.setState(state)
      localStorage.setItem('state', JSON.stringify(state))
    })
  }

  render() {
    return (
      <div className="flex_center container">
        <Filters {...this.state} />
        <List {...this.state} />
        <NewTodo {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
