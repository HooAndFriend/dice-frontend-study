
import type { UserPhoneParams } from '@/types/phone'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core';

interface PropsType {
  phone: UserPhoneParams
  setPhone: (e: ChangeEvent<HTMLInputElement>) => void
  handlePhoneSave: () => void
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

const PhonePageView = ({ phone, setPhone, handlePhoneSave}: PropsType) => {
    const classes = useStyles();
    return (
      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={4.5} />
        <Grid item xs={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <div className={classes.loginContainer}>
                <Typography variant="h3">전화번호 추가</Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phone.name}
                onChange={setPhone}
                name="name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phone.number}
                onChange={setPhone}
                name="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handlePhoneSave}>
                추가하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4.5} />
      </Grid>
    )
}

export default PhonePageView
