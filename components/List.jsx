import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'

class List extends React.Component {
  componentDidMount() {
    this.focus(0)
  }

  focus(id) {
    this.refs[`todo_${id}`] && this.refs[`todo_${id}`].focus()
  }

  render() {
    return (
      <div className="todos">
        {this.props.todos.map((todo, i) => {
          return <Todo
            visible={!!_.filter([todo], this.props.filter).length}
            id={i}
            ref={`todo_${i}`}
            key={i}
            dispatch={this.props.dispatch}
            focus={id => this.focus(id)}
            {...todo}
          />
        })}
      </div>
    );
  }
}

export default List
