import React, { useRef } from 'react'
import { Button, TextField } from '@mui/material'

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
      <TextField inputRef={inputRef} placeholder="新規ToDoを入力してください" />
      <Button onClick={handleClick}>登録</Button>
    </>
  )
}

export default TodoInput
