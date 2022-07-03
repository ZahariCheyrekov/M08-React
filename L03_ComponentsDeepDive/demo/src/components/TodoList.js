import React from 'react';
import TodoListItem from './TodoListItem';
import uniqid from 'uniqid';

export default function TodoList() {
    const [todos, setTodos] = React.useState([
        { id: uniqid(), text: 'Clean my room' },
        { id: uniqid(), text: 'Make breakfast' },
        { id: uniqid(), text: 'Wash the dishesh' },
    ]);

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