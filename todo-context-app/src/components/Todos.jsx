import { TodoProvider } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todos() {
    return (
        <TodoProvider>
            <h2>Todo Application</h2>
            <AddTodo />
            <TodoList />
        </TodoProvider>
    );
}
