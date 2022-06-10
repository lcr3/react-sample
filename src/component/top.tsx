import React from 'react'
import { Container, Grid } from '@mui/material'
import TodoList from '@/component/ToDoList'
import TodoInput from '@/component/Todoinput'
import { useTodo } from '@/hooks/useTodo'

const Top: React.FC = () => {
  const { todoState: state, addTodo: add, resetTodo: reset, deleteTodo: deleteTodo } = useTodo()

  const handleDeleteOnClick = (index: number) => {
    deleteTodo(index)
  }

return (
    <>
      <Container>
        <h1>Todoリスト</h1>
        <Grid>
            <TodoInput onClick={add} />
            <TodoList todos={state.todos} onClick={handleDeleteOnClick}/>
        </Grid>
      </Container>
    </>
  )
}
export default Top
