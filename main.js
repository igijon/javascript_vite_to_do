import './style.css';
import { Todo, TodoList } from './src/classes';
const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log(todoList);
