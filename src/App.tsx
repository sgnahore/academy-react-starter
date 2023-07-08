import { useState } from "react";

type MyOutputType = (number | string)[]

function App(): JSX.Element {

    const [numHiddenList, setHiddenList] = useState(1);
    const [numListWithFB, setListWithNumFB] = useState<MyOutputType>([]); 
  
  
    const Fizz = "fizz";
    const Buzz = "buzz";
    const FB = Fizz + Buzz;
    
  
    const handleAddOne = () => {
      setHiddenList(numHiddenList + 1);
      setListWithNumFB([...numListWithFB, numHiddenList]);
  
      if (numHiddenList % 3 === 0 && numHiddenList % 5 === 0) {
        setListWithNumFB([...numListWithFB, FB]);
      }
  
      
      else if (numHiddenList % 3 === 0) {
        setListWithNumFB([...numListWithFB, Fizz]);
      }
  
     else if (numHiddenList % 5 === 0) {
        setListWithNumFB([...numListWithFB, Buzz]);
      }
    };
  
    const listOfNumbers = (
      <ul>
        {numListWithFB.map((numListWithFB, index) => (
          <li key={index}>{numListWithFB}</li>
        ))}
      </ul>
    );
  
    return (
      <>
      <button onClick={handleAddOne}>Next</button>
        <p>Your stored numbers: {listOfNumbers}</p>
  
        
      </>
    );
  }
  
export default App;
