import React, { Component } from 'react';


const List = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return (
        <React.Fragment>

          <p key={i}>{todo.title} {todo.line}</p>
          <input type="checkbox" />
        </React.Fragment>
      )

    })}
  </ul >
);

export default List;
