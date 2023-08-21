import type { Todo } from '@/types/todo'
import { Button, Grid, TextField, Typography } from '@mui/material'

interface PropsType {
  todo: Todo[]
}
const TodoPageView = ({ todo }: PropsType) => {
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid item xs={4.5} />
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Todo Page</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label="todo"
              placeholder="할 일을 입력하세요."
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth size="large">
              ADD
            </Button>
          </Grid>
          {todo.map((item) => (
            <Typography key={item.id}>{item.text}</Typography>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4.5} />
    </Grid>
  )
}

export default TodoPageView
