import React, { Component } from 'react';
import _ from 'lodash'
import { Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const style = {
  width: '0px',
  padding: '10px',
  minWidth: '0px',
  borderRadius: '100px',
  lineHeight: '0',
  fontFamily: 'none',
  margin: '5px'
}


const List = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return (
        <React.Fragment>
          <div>

            {/* <div key={i}>
              <input type="checkbox" />
              {todo.title}   {todo.line}

              <input type="button" value="☓"
                onClick={() => this.deleteTodo(i)} />
               */}

            <li key={i}>
              {todo.title}{todo.line}
              <Button variant="outlined" color="secondary" style={style}
                onClick={() => props.deleteTodo(i)} >
                ×
              </Button>
            </li>
          </div>


        </React.Fragment>
      )

    })}
  </ul >
);

export default List;
