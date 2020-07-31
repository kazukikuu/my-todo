import React, { Component } from 'react';
import _ from 'lodash'
import { Button } from '@material-ui/core';


const style = {
  width: '0px',
  padding: '10px',
  minWidth: '0px',
  borderRadius: '100px',
  lineHeight: '0',
  fontFamily: 'none',
  margin: '5px'
}


const DoneList = (props) => (
  <ul>
    {props.done.map((d, i) => {
      return (
        < >
          <div>
            <li key={i}>
              <Button variant="outlined" color="primary"
                onClick={() => props.uncompleteTodo(i)} >
              </Button>
              {d.title}{d.line}
              <Button variant="outlined" color="secondary" style={style}
                onClick={() => props.deleteDone(i)} >
                ×
              </Button>
            </li>
          </div>
        </>
      )

    })}
  </ul >
);

export default DoneList;