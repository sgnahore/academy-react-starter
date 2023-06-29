import { greet } from "./utils/greet";
import MainContent from "./components/MainContent";
import "./App.css"

function App(): JSX.Element {
  return(
    <>
     <h1>{greet("Worldlings")}</h1>;
     <MainContent />
    </>
  )
  
}

export default App;
