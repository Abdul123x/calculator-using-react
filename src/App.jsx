import React, { useState } from 'react'
import Display from './components/Display'
import Buttons from './components/buttons/Buttons'

const App = () => {
  const [calval , setcalval] = useState("")
  const buttonclicked = (buttontext)=>{
    if (buttontext === 'c'){
       setcalval("");
      
    }else if (buttontext === '='){
      setcalval(eval(calval))

    }else {
      const newdisval = calval + buttontext;
      setcalval(newdisval)
    }
  }

  
  return (
          <>
      <Display displayval = {calval}></Display>
       <Buttons onButtonClick={buttonclicked}></Buttons>
      </>
  )
}

export default App