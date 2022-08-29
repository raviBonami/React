

import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            username: e.target.value
        })
    }

  render() {
    return (
      <div>
        <form>
        <label>Username</label>
        <input type="text" value={this.state.username} onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}

export default FormHandling