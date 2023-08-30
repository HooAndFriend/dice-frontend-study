interface PropsType {
  count: number
  handlePlus: () => void
  handleMinus: () => void
}

const CountPageView = ({ count, handleMinus, handlePlus }: PropsType) => {
  return (
    <>
      <button onClick={handlePlus}>+</button>
      <span>{count}</span>
      <button onClick={handleMinus}>-</button>
    </>
  )
}

export default CountPageView
