import React from 'react'

class NewTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  createTodo(e) {
    if (e.key === 'Enter') {
      this.props.dispatch({
        type: 'TODO_CREATE',
        title: e.target.value,
      })

      this.setState({title: ''})
    }
  }

  render() {
    return (
      <div>
        <input
          type="title"
          value={this.state.title}
          placeholder="New todo..."
          onChange={e => this.setState({title: e.target.value})}
          onKeyUp={(e) => this.createTodo(e)}
        />
      </div>
    );
  }
}

module.exports = NewTodo
