/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Todoitem from './Todoitem';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 20,
    margin: 'auto',
    width: 620
  },
  textfield : {
    fontSize: 26,
    width: 500
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
const hintText = "What needs to be done?";
class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [],
      timestamp: Date.now()
    }
  }

  addTodo(event) {
    // debugger;
    // this.setState({textValue: event.target.value + event.key});
    if(event.keyCode === 13){
      let newTodo = {
        id: Date.now(),
        text: event.target.value,
        completed: false
      };
      let todos = this.state.todos;
      todos.push(newTodo);
      this.setState({todos});
      this.setState({timestamp: Date.now()});
      // event.target.value = "";
    }
  }

  deleteTodo(id) {
    // debugger;
    let todos = this.state.todos;
    todos = todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({todos});
  }

  // updateTodo(id) {
  //   console.log("Updating Todo");
  //   debugger;
  // }


  toggleTodoCompleted(id) {
    // debugger;
    let todos = this.state.todos;
    todos.forEach((todo, index, array) => {
      if(todo.id == id){
        // console.log(todo);
        array[index] = {
          id: id,
          text: todo.text,
          completed: !todo.completed
        }
      }
    });

    this.setState({todos});
  }
  componentWillMount(){
    fetch('./data.json', {
        method: 'get'
    }).then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({todos: data});
      });
  }
  render() {
      var todoItemList = this.state.todos.map(todo => {
        // console.log(todo);
      return <Todoitem text={todo.text} 
                       completed={todo.completed} 
                       toggleTodo={this.toggleTodoCompleted.bind(this, todo.id)} 
                       key={todo.id} 
                       id={todo.id} 
                       deleteTodo={this.deleteTodo.bind(this, todo.id)}/>
    })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>todos</h1>
          <TextField style={styles.textfield} hintText={hintText} onKeyDown={this.addTodo.bind(this)} key={this.state.timestamp}/>
          {todoItemList}
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
