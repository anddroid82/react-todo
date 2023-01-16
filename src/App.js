import Todolist from "./Todolist";

let todos = [
  {id:1,title:"todo1",complete:false},
  {id:2,title:"todo2",complete:false},
  {id:3,title:"todo3",complete:false}
];
function App() {
  return (
    <div className="App">
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
