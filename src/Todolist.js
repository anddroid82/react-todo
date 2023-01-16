//import React from 'react';

function Todolist({todos}) {
    return (
        <div>
            {todos.map( todo => {
                return <p>{todo.title}</p>
            })}
        </div>
    );
}

export default Todolist;