// import React, { useContext, useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';



const style = {
  background: '#B861E0',
  color: '#fff',
  fontWeight: 'bold '
}


function TodoForm() {

  const [task, setTask] = useState('')
  const [line, setLine] = useState('')





  return (
    <>

      <TextField id="standard-basic" label="タスク" style={{
        width: '300px'
      }} value={task} onChange={e => setTask(e.target.value)} />

      <TextField id="standard-basic" label="期限" style={{
        Weight: '100px'
      }} value={line} onChange={e => setLine(e.target.value)} />
      <Button variant="contained" style={style}>
        タスク追加
    </Button>

      <h1>{task}</h1>
      <h1>{line}</h1>
    </>
  );
}


export default TodoForm;
