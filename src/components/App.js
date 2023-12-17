import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [isRed, setIsRed] = useState(true);
const handleButtonClick = () => {
setIsRed((prebIsRed) => ! prebIsRed)
};
  return (
    <div id="main">
      <p className={isRed ? 'redText': 'blueText'} >Newton School</p>
      <button id='button' onClick={handleButtonClick}>Change Style</button>
    </div>
  )
}


export default App;
