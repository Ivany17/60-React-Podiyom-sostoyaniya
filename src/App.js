import './App.css';
import React, { Component } from 'react';
import CiaoSection from './components/CiaoSection';
import UsersList from './components/UsersList';

const userDB = [
  {
  id:1,
  firstName:'Elon'
  },
  {
  id:2,
  firstName:'Nazar'
  },
  {
  id:3,
  firstName:'Ann'
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        users:userDB.map((user) => ({...user, isSelected:false}))
    }
}
setUserSelector = (newUsers) => {this.
setState({users:newUsers})}
  render(){
    const {users} = this.state;
    return <>
    {/* <CiaoSection /> */}
    <header>
      <SelectedUsersList users={users}  />
    </header>
    <main>
      <UsersList users={users} setUserSelector={this.setUserSelector}/>
    </main>
   
    </>
  }
}

export default App;