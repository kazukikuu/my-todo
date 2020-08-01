import React, { Component } from 'react';
import Form from './todoForm';
import List from './todoList';
import { TextField, Button, Select } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import DoneList from './todoDone'
import FormControl from './select'




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [{ title: "デフォルト", line: "2021-01-01" },
      { title: "デフォルト2", line: "2021-02-01" }
      ],

      done: [{ title: "完了済み", line: "2021-02-01" }],
      listNumber: 1
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteDone = this.deleteDone.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.uncompleteTodo = this.uncompleteTodo.bind(this);
    this.select = this.select.bind(this);

  }

  // データ保存
  handleAdd(e) {
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({ title: e.target.title.value, line: e.target.line.value });

    this.state.todo.push();
    // setStateを使ってstateを上書き
    this.setState({ todo: this.state.todo });
    // console.log(this.state.todo)

    // inputのvalueを空に
    e.target.title.value = '';
    e.target.line.value = '';
  }

  deleteTodo(i) {
    console.log(i)
    // 削除
    this.state.todo.splice(i, 1);
    // 保存
    this.setState({
      todo: this.state.todo
    });
  }

  deleteDone(i) {
    console.log(i)
    // 削除
    this.state.done.splice(i, 1);
    // 保存
    this.setState({
      done: this.state.done
    });
  }


  completeTodo(j) {
    // done配列に完了したtodoを追加
    let d = this.state.todo.splice(j, 1);
    this.state.done.push(d[0]);
    this.setState({
      done: this.state.done,
      todo: this.state.todo
    });
    console.log(this.state.done)

  }

  uncompleteTodo(j) {
    // done配列に完了したtodoを追加
    let d = this.state.done.splice(j, 1);
    this.state.todo.push(d[0]);
    this.setState({
      done: this.state.done,
      todo: this.state.todo
    });
    console.log(this.state.todo)

  }

  done() {
    return <DoneList done={this.state.done}
      completeTodo={this.completeTodo}
      uncompleteTodo={this.uncompleteTodo}
      deleteDone={this.deleteDone}
    />
  }

  list() {
    return <List todos={this.state.todo}
      deleteTodo={this.deleteTodo}
      completeTodo={this.completeTodo}
    />
  }

  selectNumber() {
    let num = this.state.listNumber

    switch (num) {
      case 0:
      case 1:
        return this.list()
      case 2:
        return this.done()
    }

    // if (num == 1) {

    // } else {
    //   return this.done()
    // }


  }


  select(n) {
    this.state.listNumber = n.target.value

    this.setState({
      listNumber: this.state.listNumber
    });
  }







  render() {

    return (
      <div>
        <Form handleAdd={this.handleAdd} />
        <div></div>
        <FormControl select={this.select} />
        {this.selectNumber()}
      </div>

    );
  }
}