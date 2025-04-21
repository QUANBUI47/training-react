import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function App() {
  return (
    <TodoProvider>
      <h1>📋 Todo List</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
