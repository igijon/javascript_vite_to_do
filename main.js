import './style.css';
import { Todo, TodoList } from './src/classes';
import { crearTodoHtml } from './src/js/components';

export const todoList = new TodoList();

//todoList.todo.forEach(element => crearTodoHtml(element));
todoList.todo.forEach(crearTodoHtml);
    

