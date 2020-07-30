import React, { Component } from 'react';
import _ from 'lodash'


// class List extends Component {
//   constructor(props) {

//   }


// }



const List = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return (
        <React.Fragment>
          <div>

            <div key={i}>
              <input type="checkbox" />
              {todo.title}   {todo.line}

              <input type="button" value="☓"
                onClick={() => this.deleteTodo(i)} />
            </div>

          </div>
        </React.Fragment>
      )

    })}
  </ul >
);

export default List;
