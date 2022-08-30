import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'henry'
      }
      console.log("Lifecycle B contructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle B getDerivedFromProps")
        return null;
    }

    componentDidMount(){
        console.log('Lifecycle B componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifeccyleB getSnapshotBeforeUpdate')
      return null;
    }

    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }

  render() {
    console.log("Lifecycle B render")
    return (
      <div>
        lifecycle B
      </div>
    )
  }
}

export default LifeCycleB

/*
Order of execution of each of mounting phase functions
Lifecycle A contructor
Lifecycle A getDerivedFromProps
Lifecycle A render
Lifecycle A componentDidMount


*/