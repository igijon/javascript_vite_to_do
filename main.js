import './style.css';
import { Todo, TodoList } from './src/classes';
import { crearTodoHtml } from './src/js/components';
const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScrip!!');
todoList.nuevoTodo(tarea);
crearTodoHtml(tarea);

