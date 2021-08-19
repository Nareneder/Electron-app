import React, { Component } from 'react';
import './component/style.css';
import {auth} from './component/Fire';
import Login from './component/Login'
import Profile from './Profile'
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Profile/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;