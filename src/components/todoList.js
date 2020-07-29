import React, { Component } from 'react';


const List = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return <li key={i}>{todo.title}</li>
    })}
  </ul>
);

export default List;
