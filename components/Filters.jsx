import React from 'react'

class Filters extends React.Component {
  filter(filter) {
    this.props.dispatch({
      type: 'TODO_FILTER',
      filter: filter
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.filter({done: true})}>
          Completed ({this.props.todos.filter(t => t.done).length})
        </button>
        <button onClick={() => this.filter({})}>
          Total ({this.props.todos.length})
        </button>
      </div>
    );
  }
}

module.exports = Filters
