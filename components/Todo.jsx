import React from 'react'

class Todo extends React.Component {
  check(id) {
    this.props.dispatch({
      type: 'TODO_CHECK',
      id: id
    })
  }

  edit(id, title) {
    this.props.dispatch({
      type: 'TODO_UPDATE',
      title: title,
      id: id,
    })
  }

  onKeyDown(e) {
    if (e.key === "Backspace" && e.target.value === "") {
      e.preventDefault()
      this.props.dispatch({
        type: 'TODO_DELETE',
        id: this.props.id,
      })
    }
  }

  render() {
    return (
        <div className={"done-" + this.props.done + " visible-" + this.props.visible}>
          <input
            type="checkbox"
            checked={this.props.done}
            onChange={() => this.check(this.props.id)}
          />
          <input
            type="title"
            value={this.props.title}
            onChange={(e) => this.edit(this.props.id, e.target.value)}
            onKeyDown={(e) => this.onKeyDown(e)}
          />
        </div>
    );
  }
}

module.exports = Todo
