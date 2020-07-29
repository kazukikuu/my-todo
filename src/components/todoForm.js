import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const style = {
  background: '#B861E0',
  color: '#fff',
  fontWeight: 'bold '
}

const Form = (props) => (
  <form onSubmit={props.handleAdd}>
    <div >

      <TextField id="standard-basic" name="title" type="text" label="タスク" style={{
        width: '300px'
      }} />

      <TextField id="standard-basic" name="line" type="text" label="期限" />

      <Button variant="contained" type="submit" style={style}>
        タスク追加
        </Button>
    </div>
  </form>
);

export default Form;