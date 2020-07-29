import { TextField, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import React, { Component } from 'react';


const style = {
  background: '#B861E0',
  color: '#fff',
  fontWeight: 'bold '
}


class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: "",
      line: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ task: event.target.task });
  }

  handleSubmit(event) {
    alert('タスク: ' + this.state.task);
    event.preventDefault();
  }


  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>


          <TextField id="standard-basic" label="タスク" style={{
            width: '300px'
          }} value={this.state.task} onChange={this.handleChange} />
          <input type="submit" value="Submit" />

          {/* <TextField id="standard-basic" label="期限" style={{
            Weight: '100px'
          }} value={this.state.line} onChange={} /> */}

          {/* <Button variant="contained" style={style}>
            タスク追加
        </Button> */}

        </form>


      </>
    );
  }
}


export default TodoForm;
