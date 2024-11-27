import React from 'react'

const FinishedScreen = ({ points, maxPoints, dispatch }) => {
  const per = (points / maxPoints) * 100;
  return (
    <>

      <p className='result'>You score <strong>{points}</strong> out of {maxPoints} ({Math.ceil(per)}%)</p>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'RESTART' })}>Restart</button>
    </>
  )
}

export default FinishedScreen