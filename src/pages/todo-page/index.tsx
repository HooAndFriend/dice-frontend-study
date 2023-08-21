import { useState } from 'react'
import TodoPageView from './todo-page'
import type { Todo } from '@/types/todo'

const TodoPage = () => {
  const [todo, setTodo] = useState<Todo[]>([{ id: 1, text: 'TODO' }])

  return <TodoPageView todo={todo} />
}

export default TodoPage
