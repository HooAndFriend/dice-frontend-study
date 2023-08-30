import { useSelector } from 'react-redux'
import CountPageView from './count-page'
import { getCount, minus, plus } from '@/store/app/count'
import { useDispatch } from 'react-redux'

const CountPage = () => {
  const count = useSelector(getCount)

  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(plus())
  }

  const handleMinus = () => {
    dispatch(minus())
  }

  return (
    <CountPageView
      count={count}
      handleMinus={handleMinus}
      handlePlus={handlePlus}
    />
  )
}

export default CountPage
