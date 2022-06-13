import React from "react";
import ToDo from "./ToDo";
export default function ToDoList({ todos = [], dispatchTodos }) {
    const todoDelete = (id) => {
        const deleted = todos.filter((todo) => todo.id !== id)
        dispatchTodos({type: 'DELETE_TODO', deleted})
    }
    const todoToggle = (id, updatedTodo) => {
        const newTodo = todos.map((todo) => {
            if (todo.id !== id) {
                return todo
            }
            else {
                return updatedTodo
            }
        })
        dispatchTodos({type: 'TOGGLE_TODOS', newTodo})
    }
return (
<div>
{todos.map((p, i) => (
<ToDo {...p} todoDelete={todoDelete} todoToggle={todoToggle} key={p.id} />
))}
</div>
);
}