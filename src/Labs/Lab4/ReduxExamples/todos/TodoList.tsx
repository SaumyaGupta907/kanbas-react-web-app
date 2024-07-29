import React from "react";
import TodoForm from "./TodoForm";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, setTodo} from "./todosReducer";

// Define the type for a single todo item
interface Todo {
    id: number;
    title: string;
}

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo: any) => (
                    <li key={todo.id} className="list-group-item">
                        <button onClick={() => dispatch(deleteTodo(todo.id))}
                                id="wd-delete-todo-click"> Delete </button>
                        <button onClick={() => dispatch(setTodo(todo))}
                                id="wd-set-todo-click"> Edit </button>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}
