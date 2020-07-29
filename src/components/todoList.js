import TodoForm from './todoForm'
import React from 'react';


class TodoList extends TodoForm {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.task}
        {this.props.line}
      </>
    );

  }

}


export default TodoList;
