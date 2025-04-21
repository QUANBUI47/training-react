import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

let nextId = 3;
const initialTodos = [
  { id: 0, text: 'Học React', done: true },
  { id: 1, text: 'Làm bài tập', done: false },
  { id: 2, text: 'Chạy bộ', done: false },
];

function todoReducer(todos, action) {
  switch (action.type) {
    case 'added':
      return [...todos, { id: action.id, text: action.text, done: false }];
    case 'changed':
      return todos.map(t => (t.id === action.todo.id ? action.todo : t));
    case 'deleted':
      return todos.filter(t => t.id !== action.id);
    case 'reset':
      return initialTodos;
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
