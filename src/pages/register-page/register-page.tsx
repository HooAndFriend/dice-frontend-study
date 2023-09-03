import { UserRegisterParams } from '@/types/register'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface PropsType {
  user: UserRegisterParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleRegister: () => void
}

const RegisterPageView = ({ user, setUser, handleRegister }: PropsType) => {
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid item xs={4.5} />
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Register Page</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField value={user.id} onChange={setUser} name="id" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={user.name}
              onChange={setUser}
              name="name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={user.password}
              onChange={setUser}
              name="password"
              fullWidth
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleRegister}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4.5} />
    </Grid>
  )
}

export default RegisterPageView
