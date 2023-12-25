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


// export default App;
import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const App = () => {
<<<<<<< HEAD
  // code here
  const [isRed, setIsRed] = useState(true);

  const handleButtonClick = () => {
    setIsRed((prevIsRed) => !prevIsRed);
  };

  return (
    <div id="main">
      <p className={isRed ? 'redText' : 'blueText'}>Newton School</p>
=======
//code here 
const [isRed, setIsRed] = useState(true);
const handleButtonClick = () => {
setIsRed((prebIsRed) => ! prebIsRed)
};
  return (
    <div id="main">
      <p className={isRed ? 'redText': 'blueText'} >Newton School</p>
>>>>>>> 33c810e9bf6096d45723cf65ae94e99625956d00
      <button id='button' onClick={handleButtonClick}>Change Style</button>
    </div>
  );
};

export default App;

