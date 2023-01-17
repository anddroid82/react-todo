import React from 'react';
import Todo from './Todo';

function Todolist({todos, complete}) {
    return (
        <div>
            {todos.map( todo => {
                return <Todo todo={todo} complete={complete} key={todo.id} />
            })}
        </div>
    );
}

export default Todolist;