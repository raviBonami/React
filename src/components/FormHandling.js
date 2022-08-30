

import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic:''
      }
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            username: e.target.value,
            
        })
    }

    handleText = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    selectTopic = (e) => {
        this.setState({
            topic:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        this.setState({
            username: '',
            comments: '',
            topic: ''
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <label>Username</label>
        <input type="text" value={this.state.username} onChange={this.handleChange}></input>
        <div>
            <label>Text area</label>
            <textarea value={this.state.comments} onChange={this.handleText} type="text"></textarea>
        </div>
        <div>
            <label>Topics</label>
            <select value={this.state.topic} onChange={this.selectTopic} >
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
            </select>
        </div>
        <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default FormHandling