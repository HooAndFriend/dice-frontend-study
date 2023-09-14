import { UserLoginParams } from '@/types/user'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'
import LoginIcon from '@mui/icons-material/Login'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
interface PropsType {
  user: UserLoginParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleLogin: () => void
}
const useStyles = makeStyles((theme) => ({
  root: {
    placeItems: 'center',
    display: 'grid',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
const LoginPageView = ({ user, setUser, handleLogin }: PropsType) => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid item xs={4.5} />
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.loginContainer}>
              <LoginIcon />
              <Typography variant="h3">Login</Typography>
            </div>
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
          <Grid item xs={12}>
            <Link to="/register">
              <Button variant="contained" fullWidth>
                {' '}
                회원가입
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4.5} />
    </Grid>
  )
}

export default LoginPageView
