import React from 'react'

const FinishedScreen = ({points, maxPoints}) => {
  const per = (points / maxPoints) * 100;
  return (
    <div>
      <p className='result'>You score <strong>{points}</strong> out of {maxPoints} {Math.ceil(per)}</p>
    </div>
  )
}

export default FinishedScreen