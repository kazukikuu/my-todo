// import React, { useContext, useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import React from 'react';

function AddTodo() {
  return (
    <>

      <TextField id="standard-basic" label="タスク" />
      <TextField id="standard-basic" label="期限" />
      <Button variant="contained" color="primary">
        タスク追加
</Button>
    </>

  );
}


export default AddTodo;
