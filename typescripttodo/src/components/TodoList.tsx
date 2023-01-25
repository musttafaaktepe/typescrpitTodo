import React from 'react'
import TodoListItem from './TodoListItem'

interface ITodoList{
    todos: TodoType[]
}

const TodoList:React.FC<ITodoList> = ({todos}) => {
  return (
    <ul>
    {
      todos.map((item)=> <TodoListItem key={item.id}  item={item} 
    //   toggleTodo={toggleTodo} deleteTodo={deleteTodo} 
       />)
    }
  </ul>
  )
}

export default TodoList