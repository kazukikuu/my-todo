import React, { useContext } from 'react'




function TodoList() {

  return (
    <>

      <tbody>
        {state.events.map((event, index) => (<Event key={index} event={event} />))}
      </tbody>
    </>
  );
}


export default TodoList;
