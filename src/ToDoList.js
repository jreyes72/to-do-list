import React from "react";
import ToDo from "./ToDo";
export default function ToDoList({ todos = [], dispatchTodos }) {
    const todoDelete = (index) => {
        dispatchTodos({type: 'DELETE_TODOS', id: index})
    }
    const todoToggle = (index) => {
        dispatchTodos({type: 'TOGGLE_TODOS', id: index})
    }
return (
<div>
{todos.map((p, i) => (
<ToDo {...p} todoDelete={todoDelete} todoToggle={todoToggle} index={i} key={"todo-" + i} />
))}
</div>
);
}