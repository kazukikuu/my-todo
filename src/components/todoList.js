import React from 'react';
import _, { values } from 'lodash'
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
// テーブルマテリアル
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import DatePickers from './Date'
import EditForm from './editForm';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const deletesStyle = {
  padding: '13px',
  minWidth: '0px',
  borderRadius: '100px',
  lineHeight: '0',
  fontFamily: 'none',
  margin: '5px',
  border: '2px  solid',
  color: '#ffa4a4'
}

const checkStyle = {
  padding: '13px',
  minWidth: '0px',
  borderRadius: '100px',
  lineHeight: '0',
  fontFamily: 'none',
  margin: '5px',
  border: '2px  solid',
  color: 'rgb(114, 255, 146)',


}


const List = (props) => (

  <ul>
    {props.todos.map((todo, i) => {
      return (

        <React.Fragment>
          <TableContainer>
            <Table>
              <TableBody key={i}>
                <TableCell> <Button variant="outlined" color="primary"
                  style={checkStyle} onClick={() => props.completeTodo(i)} >
                  <CheckIcon />
                </Button>
                </TableCell>
                <TableCell align="right"><h2>{todo.title}</h2></TableCell>

                {todo.editing ? (
                  <TableCell align="right" >
                    <p>{todo.line}まで</p>
                    <Button variant="outlined" onClick={() => props.editButton(i)}>編集</Button></TableCell>
                ) : (
                    <TableCell align="right">
                      <input type="text"
                        defaultValue={props.input} onChange={(e) => props.handleValue(e)} ></input>
                      <Button variant="outlined" onClick={() => props.editTodo(i)}>更新</Button>
                    </TableCell>
                  )}

                <TableCell>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" style={deletesStyle}
                    onClick={() => props.deleteTodo(i)} >
                    <CloseIcon />
                  </Button>
                </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      )

    })}
  </ul >
);

export default List;