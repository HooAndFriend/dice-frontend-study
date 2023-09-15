import { PhoneNumberParams } from '@/types/number'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect } from 'react'
import { NumberResponse } from '@/types/api/number'

interface PropsType {
  number: PhoneNumberParams
  setNumber: (e: ChangeEvent<HTMLInputElement>) => void
  handleNumber: () => void
  numberList: NumberResponse[]
  getData: () => void
}
const PhoneBookPageView = ({
  number,
  setNumber,
  handleNumber,
  numberList,
  getData,
}: PropsType) => {
  useEffect(() => {
    getData()
  }, [])
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
      <Grid item xs={9}>
        {numberList.length == 0 ? (
          <Typography>데이터가 없음</Typography>
        ) : (
          numberList.map((item, index) => (
            <li key={index}>
              이름 : {item.name} , 전화번호 : {item.number}
            </li>
          ))
        )}
      </Grid>
    </Grid>
  )
}

export default PhoneBookPageView