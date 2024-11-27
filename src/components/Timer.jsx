import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {


    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'TICK' })
        }, 1000);

        // add clean up function
        return () => {
            clearInterval(id)
        }


    }, [dispatch])

    return (
        <div className='timer'>{secondsRemaining}</div>
    )
}

export default Timer