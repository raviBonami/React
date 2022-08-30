import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'henry'
      }
      console.log("Lifecycle A contructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle A getDerivedFromProps")
        return null;
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifeccyleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        name: 'brad'
      })
    }

  render() {
    console.log("Lifecycle A render")
    return (
      <div>
        lifecycle A
        <button onClick={this.changeState} >Change state</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA

/*
Order of execution of each of mounting phase functions
Lifecycle A contructor
Lifecycle A getDerivedFromProps
Lifecycle A render
Lifecycle B contructor
Lifecycle B getDerivedFromProps
Lifecycle B render
lifecycle B componentDidMount
lifecycle A componentDidMount


We can see that if a component has child components, first 3 functions
of parent component are rendered first, but after that before componentDidMount
all the functions of child components are run , after all functions of child
componenents are done executing, then componentDidMount of parent is invoked
*/

/*
Order of execution of each of updating phase functions
Lifecycle A getDerivedStateProps
Lifecycle A shouldComponentUpdate
Lifecycle A render
Lifecycle B getDerivedStateFromProps
Lifecycle B shouldComponentUpdate
Lifecycle B render
Lifecycle B getSnapshotBeforeUpdate
Lifecycle A getSnapshotBeforeUpdate
Lifecycle B componentDidUpdate
Lifecycle A componentDidUpdate
*/