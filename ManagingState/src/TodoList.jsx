import { useState } from 'react';
import { useTodos, useTodoDispatch } from './TodoContext';

export default function TodoList() {
  const todos = useTodos();
  const dispatch = useTodoDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTodoDispatch();

  let content;
  if (isEditing) {
    content = (
      <>
        <input
          value={todo.text}
          onChange={e =>
            dispatch({
              type: 'changed',
              todo: { ...todo, text: e.target.value },
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Lưu</button>
      </>
    );
  } else {
    content = (
      <>
        {todo.text}
        <button onClick={() => setIsEditing(true)}>Sửa</button>
      </>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e =>
          dispatch({
            type: 'changed',
            todo: { ...todo, done: e.target.checked },
          })
        }
      />
      {content}
      <button onClick={() => dispatch({ type: 'deleted', id: todo.id })}>
        ❌
      </button>
    </li>
  );
}
