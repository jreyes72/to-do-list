import React, { useState } from "react";
export default function CreateToDo({ user, todos, dispatchTodos }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    function handleTitle (evt) {setTitle(evt.target.value)}
    function handleContent (evt) {setContent(evt.target.value)}
    function handleCreate (evt) {
        dispatchTodos({type: 'CREATE_TODO', title, content, dateCreated: getTime()})
    } 
return (
<form onSubmit={(e) => {e.preventDefault(); handleCreate(e)} }>
<div>
<label htmlFor="create-title">Title:</label>
<input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
</div>
<textarea value={content} onChange={handleContent} />
<input type="submit" value="Create" />
</form>
);
}
export function getTime (){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy
}
