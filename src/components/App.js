import React, { Component } from 'react';
import Form from './todoForm';
import List from './todoList';
import { TextField, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // データ保存
  handleAdd(e) {
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加


    this.state.todo.push({ title: e.target.title.value });
    this.state.todo.push({ line: e.target.title.value });
    this.state.todo.push();
    // setStateを使ってstateを上書き
    this.setState({ todo: this.state.todo });
    console.log(this.state.todo)
    // inputのvalueを空に
    e.target.title.value = '';
    e.target.line.value = '';
  }


  render() {
    return (
      <div >

        <Form handleAdd={this.handleAdd} />
        <div></div>
        <List todos={this.state.todo} />
      </div>
    );
  }
}