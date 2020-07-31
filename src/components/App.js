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
      todo: [{ title: "デフォルト", line: "2021-01-01" },
      { title: "デフォルト2", line: "2021-02-01" }
      ],

      done: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  // データ保存
  handleAdd(e) {
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({ title: e.target.title.value, line: e.target.line.value });

    this.state.todo.push();
    // setStateを使ってstateを上書き
    this.setState({ todo: this.state.todo });
    console.log(this.state.todo)

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


  completeTodo(j) {

    // done配列に完了したtodoを追加
    this.state.done = this.state.todo.splice(j, 1);

    this.setState({
      done: this.state.done,
      todo: this.state.todo
    });
    console.log(this.state.done);
    console.log(this.state.todo);
  }


  render() {
    return (
      <div>

        <Form handleAdd={this.handleAdd} />
        <div></div>
        <List todos={this.state.todo}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  }
}