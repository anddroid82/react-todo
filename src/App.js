import Todolist from "./Todolist";
import React,{useState,useEffect} from "react";
import Bloglist from "./Bloglist";

let todoList = [
  {id:1,title:"todo1",complete:false},
  {id:2,title:"todo2",complete:false},
  {id:3,title:"todo3",complete:false}
];

function App() {
  const download = async () => {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts');
    let y = await x.text();
    setPosts(JSON.parse(y));
  }
  useEffect( () => {
    download();
  },[]);

  const [posts,setPosts] = useState([]);

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
      <Bloglist posts={posts} />
    </div>
  );
}

export default App;
