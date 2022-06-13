import React, {useState} from "react";
import { getTime } from "./CreateToDo";

export default function ToDo({ title, content, dateCreated, complete, dateCompleted, id, todoDelete, todoToggle}) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        const updatedTodo = {
            title,
            content,
            dateCreated,
            complete: !complete,
            dateCompleted: getTime(),
            id
        }

        todoToggle(id, updatedTodo)
    }
    const handleDelete = (evt) => {
        todoDelete(id)
    }
return (
<div>
<h3>{title}</h3>
<div>{content}</div>
<div>Completed: {checked?  `${getTime()}` : `${dateCompleted}`}</div>
<br />
<div>Created: {dateCreated}</div>
<form>
<input type="checkbox" onChange={handleChange} checked = {checked} id = "check" name = "item" ></input>
<label for="check">Done: {checked ? `${!complete}`:  `${complete}`} </label>
<input type="button" value="Delete" onClick={handleDelete} />
</form>
</div>
);
}