import React from 'react'
import DateCounter from './components/DateCounter'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className="quiz-container">
      <Header/>
      {/* <DateCounter/> */}

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>


    </div>
  )
}

export default App