import Todolist from "./Todolist";
import React,{useState,useEffect,useRef} from "react";
import Bloglist from "./Bloglist";
import { v4 as uuidv4 } from "uuid";

let todoList = [
  {id:1,title:"todo1",complete:false},
  {id:2,title:"todo2",complete:false},
  {id:3,title:"todo3",complete:false}
];

const LOCALSTORAGE_KEY = 'todoApp.todos';

function App() {
  const [posts,setPosts] = useState([]);
  const [todos,setTodos] = useState([]);

  let inputRef = useRef();
  const download = async () => {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts');
    let y = await x.text();
    setPosts(JSON.parse(y));
  }
  useEffect( () => {
    let loadedTodoList = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (loadedTodoList) {
      setTodos(loadedTodoList);
    }
    download();
  },[]);

  useEffect( () => {
    if (todos.length === 0) return;
    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(todos));
  },[todos]);

  
  function completed(id) {
    console.log(id);
    const moddedTodos = todos.filter( todo => {
      if (todo.id === id) todo.complete = !todo.complete;
      return todo;
    });
    setTodos(moddedTodos);
  }
  function addTodo(event) {
    event.preventDefault();
    let inputText = inputRef.current.value;
    if (inputText === '') return;
    let newTodos = [...todos,{id:uuidv4(),title:inputText,complete:false}];
    setTodos(newTodos);
    inputRef.current.value = '';
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} /><button onClick={addTodo}>Hozzáad</button>
      <Todolist todos={todos} complete={completed} />
      <Bloglist posts={posts} />
    </div>
  );
}

export default App;
