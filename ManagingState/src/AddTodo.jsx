import { useState } from 'react';
import { useTodoDispatch } from './TodoContext';

let nextId = 3;

export default function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useTodoDispatch();

  return (
    <>
      <input
        placeholder="Thêm việc..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text.trim()) {
            dispatch({ type: 'added', id: nextId++, text });
            setText('');
          }
        }}
      >
        Thêm
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
