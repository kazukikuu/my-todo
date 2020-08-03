import React, { Component } from 'react';
import _ from 'lodash'
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

// テーブルマテリアル
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



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
  color: '#fff',
  boxShadow: 'none',
  backgroundColor: 'rgb(114 255 146)'
}



const DoneList = (props) => (
  <ul>
    {props.done.map((d, i) => {
      return (
        < >
          <div>
            <TableContainer >
              <Table>
                <TableBody key={i}>

                  <TableCell>
                    <Button variant="contained"
                      style={checkStyle} onClick={() => props.uncompleteTodo(i)} >
                      <CheckIcon />
                    </Button>
                  </TableCell>
                  <TableCell><h2>{d.title}</h2></TableCell>
                  <TableCell>{d.line}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="secondary" style={deletesStyle}
                      onClick={() => props.deleteDone(i)} >
                      <CloseIcon />
                    </Button>
                  </TableCell>

                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )

    })}
  </ul >
);

export default DoneList;