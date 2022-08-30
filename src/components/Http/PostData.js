
// How to post data using axios

import axios from 'axios'
import React, { Component } from 'react'

class PostData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: '',
            title: '',
            body: ""
        }
    }

    userIdHandler = (e) => {
        this.setState({
            userID: e.target.value
        })
    }

    titleHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    bodyHandler = (e) => {
        this.setState({
            body: e.target.value
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.userID)
        console.log(this.state.title)
        console.log(this.state.body)

        const newPost = {
            userId: this.state.userID,
            title: this.state.title,
            body: this.state.body
        }

        // axios.post = takes 2 arguments, url for post
        // data that we want to post
        // In response, we get another data (jsonplaceholder only)
        // which we can use for other tasks

        // Notice that for post, we did not use componentDidMount
        // method, instead we simply created a function and called
        // it on a click submit
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((response => {
            console.log(response)
        })).catch((reject) => {
            console.log(reject)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>UserID</label>
                    <input
                        value={this.state.userID}
                        type="text"
                        name="userID"
                        onChange={this.changeHandler} ></input>

                    <label>Title</label>
                    <input
                        value={this.state.title}
                        type="text"
                        name="title"
                        onChange={this.changeHandler} ></input>

                    <label>Body</label>
                    <input
                        value={this.state.body}
                        type="text"
                        name="body"
                        onChange={this.changeHandler} ></input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostData