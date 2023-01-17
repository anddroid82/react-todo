import React from 'react';

function Todo({todo,complete}) {
    const handleChange = () => {
        complete(todo.id);
    };
    return (
        <div>
            <div key={todo.id}><input type="checkbox" checked={todo.complete} onChange={handleChange} /><label>{todo.title}</label></div>
        </div>
    );
}

export default Todo;
