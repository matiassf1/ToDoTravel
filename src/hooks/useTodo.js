import { useEffect, useState } from 'react';


 const init = () => {
     return JSON.parse(localStorage.getItem('todos')) || [];
   }

export const useTodo = () => {
    const [todos, setTodos] = useState(init);
  
    
  
    // useEffect(() => {
    //   localStorage.setItem('todos', JSON.stringify(todos));
    // }, [todos])
  

  const handleNewTodo = (todo) => {
    return setTodos([...todos, todo])
  }

  const handleDeleteTodo = (id) => {
    return setTodos(todos.filter( todo => todo.id != id ))
  }


  // FALTA DEFINIR COMO QUIERO MODIFICAR MIS TODOS
//   const handleModifyTodo = (id) => {
//     setTodos(todos.map((todo) => {
//         if (todo.id === id) {
//                todo = {
//                 ...todo,
//                 done: !(todo.done)
//             }
//         }
//         return todo
//     }))
//   }

  return {
        todos,
        handleDeleteTodo,
        handleModifyTodo,
        handleNewTodo,
        pendingTodoCount: todos.filter( (todo) => todo.done === false ).length,
        todoCount: todos.length
    }
}

