import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Error from './components/Error'
import Main2 from './Main2'
import { INITIAL_STATE, questionReducer } from './reducers/QuestionReducer'
import StartScreen from './screens/StartScreen'
import Questions from './components/Questions'




const App = () => {
  const [{ questions, status, index }, dispatch] = useReducer(questionReducer, INITIAL_STATE)

  const numQuestions = questions.length;
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
        {status === 'active' && <Questions question={questions[index]} />}
      </Main2>

    </div>
  )
}

export default App