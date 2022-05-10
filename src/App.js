import './App.css';
import React, {useState} from 'react';
import UserBar from './Userbar';
import ToDoList from './ToDoList';
import CreateToDo from './CreateToDo';
import { getTime } from './CreateToDo';

function App() {
  const initialTodos = [{title: "Homework", content: "Do CS Homework", dateCreated: getTime(), complete: false, dateCompleted: "" }]
  const [user, setUser] = useState("")
  const [todos, setTodos] = useState(initialTodos)
  return (
    <div className="App">
      <header className="App-header">
       <UserBar user={user} setUser={setUser} />
       {user && <CreateToDo user={user} todos={todos} setTodos={setTodos} />}
       {user && <ToDoList todos={todos} />}
      </header>
    </div>
  );
}

export default App;
