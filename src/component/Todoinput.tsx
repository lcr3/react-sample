import React, { useRef } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'

type Props = {
  onClick: (title: string) => void
}

const TodoInput: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    const inputValue = inputRef?.current?.value || ''
    props.onClick(inputValue)
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <TextField
            inputRef={inputRef}
            placeholder="新規ToDoを入力してください"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleClick}
            sx={{ height: '100%' }}
            variant="outlined"
          >
            登録
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default TodoInput
