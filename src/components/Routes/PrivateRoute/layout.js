import React, { Component } from 'react';

//import Task from './task';

class PrivateRoute extends Component {

  //itemInput = React.createRef();

  state = {
    task: [" "]
  }

  addTask = (event) => {
    event.preventDefault();
    let newItemValue = this.refs.itemName.value;
    let { task } = this.state;
    console.log(task)
    let newTask = task.push(newItemValue);
    console.log(newTask)

    this.setState({
      task: newTask
    })
  }
  
  newItemInsert = (item, key) => {
    return (
     <li key={key}>
         {item}
         <button>Delete</button>
     </li>
    )
  };

  render() {
    let { fakeAuth, history } = this.props;
    let { task } = this.state;
    return (
      <div>
        <form ref="form" onSubmit={this.addTask}>
          <input type="text" placeholder="HomeWork" ref="itemName"/>
          <button type="submit">add</button>
        </form>  
        <ul>
       {task.map(this.newItemInsert)}
    </ul>  
        <button onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
        
      </div>
    )
  }
}

export default PrivateRoute;