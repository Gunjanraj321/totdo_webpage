import "./App.css";
import ToDoForm from "./component/ToDoForm";
import TodoList from "./component/ToDoList";
import { ToDoProvider } from "./ToDoContext";

function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <h1>Todo App</h1>
        <ToDoForm />
        <TodoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
