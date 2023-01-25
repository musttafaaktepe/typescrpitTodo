import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://63d123e33f08e4a8ff9167ef.mockapi.io/todos"



const Home = () => {

    const [todos,setTodos] = useState<TodoType[]>([])
  
    const getTodos = async () => {
        try {
          const {data} = await axios.get<TodoType[]>(url)
          console.log(data)
          setTodos(data)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        getTodos()
      },[])

  return (
    <div className='main'>
      <InputForm  />
      <TodoList todos={todos}  />
    </div>
  )
}

export default Home