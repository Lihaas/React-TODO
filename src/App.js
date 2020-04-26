import React from 'react';
import logo from './logo_sky.png';
import './App.css';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list :[]
    }
  }

  addItem(todoValue){
    if (todoValue !== "") {
      const newItem = {
        id :Date.now(),
        value : todoValue,
        isDone: false
      }

      const list = [...this.state.list]
      list.push(newItem)

      this.setState({
        list,
        newItem: ""
      }) 

    }
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    this.setState({list: updatedList})
}

updatedInput(input){
  this.setState({newItem:input})
}


  render(){

    return(

      <div >
      <div className="divName">
      <img src ={logo} width="200" height="200" className="logo"/>
      <h1 className="app-title" >SkyWalker's Todo React App</h1>
      </div>
      <div className="containor">
      <h9 className="txtAdd">Add a Item.... </h9>
      <br/>
      <input 
      type="text" 
      className="inputType"
      placeholder = "Write your todo"
      required
      value = {this.state.newItem}
      onChange ={ e => this.updatedInput(e.target.value)} 
      /> 
      <button 
      className="addbtn"
      onClick ={() => this.addItem(this.state.newItem)}
      disabled={!this.state.newItem.length}
      >
      Add Todo
      </button>

      <div >
      <ul >
      {this.state.list.map(item => {
        return(
          <li className="list" key={item.id}>
          <input 
          type="checkbox"
          name="isDone"
          onChange={() => {}}
          />
          {item.value}
          <button
          className="btn"
          onClick={() => this.deleteItem(item.id)}
          >
          Delete
          </button>
          </li>
        )
      })}
        </ul>
    </div>
    </div>      
    </div>




    );



  }




}

export default App;
