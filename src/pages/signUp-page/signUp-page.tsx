import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core';
import { UserRegisterParams } from '@/types/regi';
interface PropsType {
  user: UserRegisterParams
  setUser: (e: ChangeEvent<HTMLInputElement>) => void
  handleRegister: () => void
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

}));
const RegisterPageView = ({ user, setUser, handleRegister }: PropsType) => {
  const classes = useStyles();
  
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid item xs={4.5} />
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <div className={classes.loginContainer}>
              <LockOutlinedIcon />
              <Typography variant="h3">Sign Up</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={user.username}
              onChange={setUser}
              placeholder='username'
              name="username"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={user.password}
              onChange={setUser}
              name="password"
              placeholder='password'
              fullWidth
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={user.name}
              onChange={setUser}
              name="name"
              placeholder='NAME'
              fullWidth
              type="name"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleRegister}>
              Sign UP
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4.5} />
    </Grid>
  )
}

export default RegisterPageView
