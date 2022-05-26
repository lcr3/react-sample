import React from 'react'
import { Container, Grid, Stack } from '@mui/material'
import TodoList from '@/component/ToDoList'
import TodoInput from '@/component/Todoinput'
import { useTodo } from '@/hooks/useTodo'

const Top: React.FC = () => {
  const { todoState: state, addTodo: add, resetTodo: reset } = useTodo()

return (
    <>
      <Container>
        <h1>Todoリスト</h1>
        <Grid xs={12}>
          <Stack spacing={3}>
            <TodoInput onClick={add} />
            <TodoList todos={state.todos} />
          </Stack>
        </Grid>
      </Container>
    </>
  )
}
export default Top
