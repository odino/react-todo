import React from 'react'
import _ from 'lodash';

class Filters extends React.Component {
  filter(filter) {
    this.props.dispatch({
      type: 'TODO_FILTER',
      filter: filter
    })
  }

  render() {
    let filtered = _.get(this, 'props.filter.done', false)

    return (
      <div className="filters flex_center flex_row">
        <button className={filtered ? 'active' : ''} onClick={() => this.filter({done: true})}>
          Completed ({this.props.todos.filter(t => t.done).length})
        </button>
        <button className={!filtered ? 'active' : ''} onClick={() => this.filter({})}>
          Total ({this.props.todos.length})
        </button>
      </div>
    );
  }
}

export default Filters
