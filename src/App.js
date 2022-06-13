import './App.css';
import React, {useState, useReducer} from 'react';
import UserBar from './Userbar';
import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';
import { getTime } from './CreateToDo';

function App() {

  function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
  }
  
  function todoReducer(state, action) {
    switch(action.type) {
      case "CREATE_TODO":
        const newTodo = {
          title: action.title,
          content: action.content,
          dateCreated: action.dateCreated,
        };
        return [newTodo, ...state];
      case "DELETE_TODO":
        return state.filter(todo => todo.id != action.id)
      case "TOGGLE_TODO":
        // toggle function
        return {...state, }
      default:
        return state;
    }
  }
  const initialTodos = [{title: "Homework", content: "Do CS Homework", dateCreated: getTime(), complete: false, dateCompleted: "" }]
  const [user, dispatchUser] = useReducer(userReducer, "")
  //const [user, setUser] = useState("")
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  return (
    <div className="App">
      <header className="App-header">
       <UserBar user={user} dispatchUser={dispatchUser} />
       {user && <CreateToDo user={user} todos={todos} dispatchTodos={dispatchTodos} />}
       {user && <ToDoList todos={todos} dispatchTodos={dispatchTodos} />}
      </header>
    </div>
  );
}

export default App;
