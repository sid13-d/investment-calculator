import Header  from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10

});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
    setUserInput(prevState => {
        return {
            ...prevState,
            [inputIdentifier]: +newValue
        }
    })
}
console.log(userInput);

  return (
    <>
    <Header />
    <UserInput  handleChange={handleChange} userInp={userInput}/>
    {inputIsValid && <Result userInput={userInput}/>}
    {!inputIsValid && <p>Please enter a valid duration</p>}
    </>
  )
}

export default App
