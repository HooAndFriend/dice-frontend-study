import { PhoneNumberParams } from '@/types/number'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface PropsType {
  number: PhoneNumberParams
  setNumber: (e: ChangeEvent<HTMLInputElement>) => void
  handleNumber: () => void
}
const PhoneBookPageView = ({ number, setNumber, handleNumber }: PropsType) => {
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      <Grid item xs={4.5} />
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Phone-Book Page</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label="number"
              name="number"
              placeholder="전화번호를 입력하세요"
              value={number.number}
              onChange={setNumber}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label="name"
              name="name"
              placeholder="이름을 입력하세요"
              value={number.name}
              onChange={setNumber}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleNumber}
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4.5} />
    </Grid>
  )
}

export default PhoneBookPageView
