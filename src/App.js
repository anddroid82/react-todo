import Todolist from "./Todolist";
import React,{useState} from "react";

let todoList = [
  {id:1,title:"todo1",complete:false},
  {id:2,title:"todo2",complete:false},
  {id:3,title:"todo3",complete:false}
];

function App() {
  const [todos,setTodos] = useState(todoList);
  function completed(id) {
    console.log(id);
    const moddedTodos = todos.filter( todo => {
      if (todo.id === id) todo.complete = !todo.complete;
      return todo;
    });
    setTodos(moddedTodos);
  }
  return (
    <div className="App">
      <Todolist todos={todos} complete={completed} />
    </div>
  );
}

export default App;
