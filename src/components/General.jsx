// import { TodoElContenido } from "./TodoElContenido";
// import { Formulario } from "./Formulario";
// import { v4 as uuidv4 } from "uuid";
// import { EditFormulario } from "./EditFormulario";

// const General = () => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     const newTodo = {
//       id: uuidv4(),
//       task: todo,
//       completed: false,
//       isEditing: false,
//     };

//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const deleteTodo = (id) =>
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

//   const toggleComplete = (id) => {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       );

//       // Reorganize todos to move completed todos to the end
//       const completedTodos = updatedTodos.filter((todo) => todo.completed);
//       const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);
//       const sortedTodos = [...incompleteTodos, ...completedTodos];

//       return sortedTodos;
//     });
//   };

//   const editTodo = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };

//   const editTask = (task, id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
//       )
//     );
//   };
//     return (
//         <div className="Todo">
//           <h1>REMEMBRALL</h1>
//           <Formulario addTodo={addTodo} />
//           {todos.map((todo) =>
//             todo.isEditing ? (
//               <EditFormulario editTodo={editTask} task={todo} key={todo.id} />
//             ) : (
//               <TodoElContenido
//                 key={todo.id}
//                 task={todo}
//                 deleteTodo={deleteTodo}
//                 editTodo={editTodo}
//                 toggleComplete={toggleComplete}
//               />
//             )
//           )}
//         </div>
//       );
//     };
    

// export default General

import React, { useState } from 'react';
import TodoElContenido from "./TodoElContenido";
import EditFormulario from "./EditFormulario";
import  Formulario  from "./Formulario";


const General = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      task: todo,
      completed: false,
      isEditing: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      // Reorganize todos to move completed todos to the end
      const completedTodos = updatedTodos.filter((todo) => todo.completed);
      const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);
      const sortedTodos = [...incompleteTodos, ...completedTodos];
      return sortedTodos;
    });
  };

  const editTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
        <h1>REMEMBRALL</h1>
      <Formulario addTodo={addTodo} />
      {todos.map((todo) => {
        if (todo.isEditing) {
          return (
            <EditFormulario
              key={todo.id}
              editTodo={editTask}
              task={todo}
            />
          );
        } else {
          return (
            <TodoElContenido
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          );
        }
      })}
    </div>
  );
};

export default General;
