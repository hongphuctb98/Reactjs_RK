import SearchForm from "./components/SearchForm";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoForm />
      <SearchForm />

      <TodoList />
    </div>
  );
}

export default App;
