import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Error from './components/Error'
import Progress from './components/Progress'
import Main2 from './Main2'
import { INITIAL_STATE, questionReducer } from './reducers/QuestionReducer'
import StartScreen from './screens/StartScreen'
import Questions from './components/Questions'
import NextButton from './components/NextButton'
import FinishedScreen from './screens/FinishedScreen'
import Footer from './components/Footer'
import Timer from './components/Timer'




const App = () => {
  const [{ questions, status, index, answer, points, secondsRemaining }, dispatch] = useReducer(questionReducer, INITIAL_STATE)


  

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0)

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then(data => dispatch({ type: 'DATA_RECEIVED', payload: data }))
      .catch((err) => dispatch({ type: 'DATA_FAILED' }));

  }, [])

  return (
    <div className='app'>
      <Header />
      <Main2 className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Progress index={index} numQuestions={numQuestions} points={points} maxPoints={maxPoints} answer={answer} />
            <Questions question={questions[index]} dispatch={dispatch} answer={answer} />
          </>
        )
        }
        {status === 'finished' && (<FinishedScreen dispatch={dispatch} points={points} maxPoints={maxPoints} />)}
        <Footer>
          <Timer
            dispatch={dispatch}
            secondsRemaining={secondsRemaining}
          />
          <NextButton
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
        </Footer>
      </Main2>

    </div>
  )
}

export default App