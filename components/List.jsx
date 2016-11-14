import React from 'react'
import Todo from './Todo'

class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => {
          return <Todo
            visible={!!_.filter([todo], this.props.filter).length}
            id={i}
            key={i}
            dispatch={this.props.dispatch}
            {...todo}
          />
        })}
      </div>
    );
  }
}

module.exports = List
