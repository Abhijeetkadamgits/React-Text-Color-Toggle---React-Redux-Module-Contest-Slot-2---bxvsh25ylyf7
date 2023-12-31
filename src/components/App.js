// import React, {useEffect, useState} from 'react'
// import '../styles/App.css';

// const App = () => {
// //code here 
// const [isRed, setisRed] = useState(true);
// const handleButtonClick = () => {
// setIsRed((prebisRed) => ! prebisRed)
// };
//   return (
//     <div id="main">
//       <p className={isRed ? 'redText': 'blueText'} >Newton School</p>
//       <button id='button' onClick={handleButtonClick}>Change Style</button>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const App = () => {
  // code here
  const [isRed, setIsRed] = useState(true);

  const handleButtonClick = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };

  return (
    <div id="main">
      <p className={isRed ? 'redColor' : 'blueColor'}>Newton School</p>
      <button id='button' onClick={handleButtonClick}>Change Style</button>
    </div>
  );
};

export default App;


