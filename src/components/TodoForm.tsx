import { useState } from "react"

type TodoFormProps = {
    addTodo: (text: string) => void
  }

export function TodoForm(props: TodoFormProps) {
    const [value, setValue] = useState("")
  
    const handleSubmit = (e:React.FormEvent):void => {
      e.preventDefault()
      if (!value) return
      props.addTodo(value)
      setValue("")
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type= "text"
          className= "input"
          value={value}
          onChange={(e) => setValue(e.target.value)}/>
      </form>
    )
  }