import type { UserPhoneParams } from '@/types/phone'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { PhoneResponse } from '@/types/api/phone'

interface PropsType {
  phone: UserPhoneParams
  setPhone: (e: ChangeEvent<HTMLInputElement>) => void
  handlePhoneSave: () => void
  phoneList: PhoneResponse[]
  fetchPhoneListFromServer: () => void
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

const PhonePageView = ({
  phone,
  setPhone,
  handlePhoneSave,
  phoneList,    
}: PropsType) => {
  const classes = useStyles()
  const [isPhoneBookVisible, setIsPhoneBookVisible] = useState<Boolean>(false)

  const togglePhoneBookVisibility = () => {
    setIsPhoneBookVisible(!isPhoneBookVisible)
  }
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
      <Grid item xs={6}>
        <Typography variant="h4" onClick={togglePhoneBookVisibility}>
          전화번호
        </Typography>
        {isPhoneBookVisible && (
          <div>
            <ul>
              {phoneList.map((item) => (
                <li key={item.responseData.id}>
                  이름: {item.responseData.name}, 전화번호:
                  {item.responseData.number}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default PhonePageView
