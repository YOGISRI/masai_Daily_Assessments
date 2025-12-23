import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem() {
    const { todos, deleteTodo } = useContext(TodoContext);

    return (
        <>
            {todos.map(todo => (
                <div key={todo.id}>
                    <span>{todo.title}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}
