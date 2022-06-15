import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

const TodoApp = () => {

     const [todoId, setTodoId] = useState(1);
     // const { data: todos = [], isLoading } = useGetTodosQuery();
     const { data: todo, isLoading } = useGetTodoQuery(todoId);

     const nextTodo = () => {
          setTodoId(todoId + 1);
     }
     const prevTodo = () => {
          if (todoId === 1) return;
          setTodoId(todoId - 1);
     }

     return (
          <>
               <h1>Todo - RTK Query</h1>
               <hr />

               <h4>isLoading: {isLoading ? 'true' : 'false '} </h4>

               <pre>{JSON.stringify(todo, null, 3)}</pre>

               <button
                    onClick={prevTodo}
               >
                    Previous Todo
               </button>

               <button
                    onClick={nextTodo}
               >
                    Next Todo
               </button>


               {/* <ul>
                    {todos.map(todo => (
                         <li key={todo.id}>
                              <strong>{todo.completed ? 'Hecho ' : 'Pendiente '}</strong>
                              {todo.title}</li>
                    ))}
               </ul> */}



          </>
     )
}

export default TodoApp;

// RTK esta hecho para optimizar las peticiones HTTP