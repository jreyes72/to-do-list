import React, {useState} from "react";
import { getTime } from "./CreateToDo";

export default function ToDo({ title, content, dateCreated, complete}) {
    const [checked, setChecked] = useState(false)
    const handleChange = () => {
        setChecked(!checked)
    }
return (
<div>
<h3>{title}</h3>
<div>{content}</div>
<form>
<input type="checkbox" onChange={handleChange} id="check" value="done"></input>
    <label for="check">Done: {checked ? `${!complete}`:  `${complete}`} </label>
</form>
<div>Completed: {checked ? getTime() : "" }</div>
<br />
<div>Created: {dateCreated}</div>
</div>
);
}