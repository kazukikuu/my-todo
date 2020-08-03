import React, { Component } from "react"
// import App from './App'

export default class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: props.title,
      editing: true
    }
    this.editAdd = props.editAdd

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditing = this.handleEditing.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.input) return
    this.setState({
      input: this.state.input,
      editing: !this.state.editing,
    })

    // console.log(this.props.id)
    // ここで親コンポーネントを変える関数実行

  }


  handleEditing(e) {
    e.preventDefault()
    this.setState({
      editing: !this.state.editing,
    })

  }

  render() {
    const { editing } = this.state
    return (
      <div>
        <form>
          {editing ? (
            <div>
              <input
                onChange={(e) => {
                  this.setState({ input: e.target.value })
                }}
                type="text"
                value={this.state.input}
              />

              <button onClick={this.handleSubmit}>Save</button>
            </div>
          ) : (
              <div>
                <span>{this.state.input}</span>
                <button onClick={this.handleEditing}>Edit</button>
              </div>
            )}
          {/* <button onClick={() => this.editAdd()}>a</button> */}
        </form>
      </div>
    )
  }




}