import React, {useState} from "react";
import { getTime } from "./CreateToDo";

export default function ToDo({ title, content, dateCreated, complete, todoDelete, todoToggle, index}) {
    
    const handleChange = (event) => {
        todoToggle(index)
    }
    const handleDelete = (evt) => {
        todoDelete(index)
    }
return (
<div>
<h3>{title}</h3>
<div>{content}</div>
<form>
<input type="checkbox" onChange={handleChange} value={complete}></input>
</form>
<div>Completed: {getTime()}</div>
<br />
<div>Created: {dateCreated}</div>
<form onSubmit={(e) => {e.preventDefault(); handleDelete(e)} }>
<input type="submit" value="Delete" />
</form>
</div>
);
}