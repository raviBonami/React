import React, { Component } from 'react'
import axios from 'axios'

// Since we are making a side-effect, we can only
// make this http request in some lifecycle method
// Only componentDidMount() is the lifecycle method
// in which we can do side-effects

// The request will be made once when the component mounts
// first time and since this methos only runs once in
// a component lifecycle, this is correct place to make a call

// Understanding whole process - 
// First constructor is made, in which state is made and inside
// it posts is assigned to empty array

// Then control moves to render method, text "List of posts"
// is displayed, but actual list is not

// Then control flows to componentDidMount, in this we make
// get request to api , get its response and use setState to
// update the list, the list now chnaged and the component
// re-renders, although this time no api call will be made
// as componentDidMount only runs when component renders
// for the first time


class GetPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount(){
        // axios.get(<url link>),
        // Also, since it is a promise, we can use .then() to
        // catch the value returned
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            const data = response.data;
            this.setState({
                posts: data
            })
            console.log(data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

  render() {
    const { posts } = this.state
    return (
      <div>List of posts
        
        {posts.length ?
        posts.map((post) => (
            <h1 key={post.id} >{post.title}</h1>
        )): ""}
      </div>
    )
  }
}

export default GetPosts