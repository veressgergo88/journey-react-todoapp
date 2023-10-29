import { useState } from 'react'
import { TodoType } from './components/Todo'
import { Todo } from './components/Todo'
import { TodoForm } from './components/TodoForm'
import './App.css'

function App() {
  
  const [todos, setTodos] = useState<TodoType[]>([
    { text: "Learn about React",
      isCompleted: false
    },
    { text: "Meet friend for lunch",
      isCompleted: false
    },
    { text: "Build really cool todo app",
      isCompleted: false
    }
  ])

  const addTodo = (text: string) => {
    const newTodo = [...todos,{ text, isCompleted: false }]
    setTodos(newTodo)
  }

  const completeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App
