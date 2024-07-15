import ToDoForm from "./component/ToDoForm";
import TodoList from "./component/ToDoList";

function App() {
  return (
    <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Todo App</h1>
        <div className="flex space-x-4">
          <div className="w-1/3">
            <ToDoForm />
          </div>
          <div className="w-1/2">
            <TodoList />
          </div>
        </div>
    </div>
  );
}

export default App;
