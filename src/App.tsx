import { useState } from 'react'
import './App.css'

type Todo = {
  text: string
}

function Todo({ todo }: { todo: Todo}) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

function App() {
  
  const [todos, setTodos] = useState<Todo[]>([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ])

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}

export default App
