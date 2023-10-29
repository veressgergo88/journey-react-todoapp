export type TodoType = {
    text: string
    isCompleted: boolean
  }

type TodoProps = {
    index : number
    todo: TodoType
    completeTodo: (index: number) => void
    removeTodo: (index: number) => void
}

export function Todo(props: TodoProps) {
    return (
      <div className="todo"
      style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
      >
        {props.todo.text}
        <div>
          <button onClick={() => props.completeTodo(props.index)}>Complete</button>
          <button onClick={() => props.removeTodo(props.index)}>X</button>
        </div>
      </div>
    )
  }