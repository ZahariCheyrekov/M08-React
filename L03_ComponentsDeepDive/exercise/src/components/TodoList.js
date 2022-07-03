import { useEffect, useState } from 'react';
import TodoListItem from './TodoListItem';

import uniqid from 'uniqid';

import { getTodos } from '../services/api';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
            .then(todos => setTodos(Object.values(todos)));
    }, []);

    const onToDoBlur = (ev) => {
        let todo = {
            id: uniqid(),
            text: ev.target.value
        };

        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ]);
    }

    const onDeleteTodoItemHanlder = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id="todo-id" onBlur={onToDoBlur} name="todo" />
            <ul>
                {todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        onDelete={onDeleteTodoItemHanlder}
                    />
                ))}
            </ul>
        </>
    );
}