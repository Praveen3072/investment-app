import './App.css'
import Header from './components/Header'
import Results from './components/Results';
import UserInput from './components/UserInput'
import { useState } from 'react'
function App() {

  const [userInput, setUserInput] = useState({
    intialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration>0;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    }
    )
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onEnter={handleChange}/>
      {inputIsValid && <Results input={userInput}/>}
      {!inputIsValid && <p>Please Enter Duration greaterthan 0</p>}
    </>
  )
}

export default App
