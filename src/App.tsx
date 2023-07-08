import { useState } from "react";

type MyOutputType = (number | string)[];

function App(): JSX.Element {
  const [numHiddenList, setHiddenList] = useState(1);
  const [numListWithFB, setListWithNumFB] = useState<MyOutputType>([]);

  const Fizz = "fizz";
  const Buzz = "buzz";
  const FB = Fizz + Buzz;
  const numberChange = 1;
  const modulusNum1 = 3;
  const modulusNum2 = 5;

  const handleAddOne = () => {
    setHiddenList(numHiddenList + numberChange);
    setListWithNumFB([...numListWithFB, numHiddenList]);

    if (
      numHiddenList % modulusNum1 === 0 &&
      numHiddenList % modulusNum2 === 0
    ) {
      setListWithNumFB([...numListWithFB, FB]);
    } else if (numHiddenList % modulusNum1 === 0) {
      setListWithNumFB([...numListWithFB, Fizz]);
    } else if (numHiddenList % modulusNum2 === 0) {
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
