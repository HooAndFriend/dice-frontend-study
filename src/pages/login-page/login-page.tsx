import { UserLoginParams } from '@/types/user'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface PropsType {
  user: UserLoginParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleLogin: () => void
}

const LoginPageView = ({ user, setUser, handleLogin }: PropsType) => {
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid item xs={4.5} />
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Login Page</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={user.username}
              onChange={setUser}
              name="username"
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
            <Button variant="contained" fullWidth onClick={handleLogin}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4.5} />
    </Grid>
  )
}

export default LoginPageView
