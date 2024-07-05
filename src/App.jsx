import Heading from "./components/heading"
import Counter from "./components/counter"
import Decrement from "./components/decrement"
import Increment from "./components/increment"
import { useState } from "react"

function App() {
  const [counter, setCounter] =useState(0)

  let num = 10;
  console.log("THIS IS THE COUNTER VALUE")

  return(
    <div 
    id="main"
    style={{
     // border: "solid 2px black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      marginLeft: "600px",
      
    }}
    >
      <section>
        <Heading />
      </section>
      <section>
        <Counter setCounter= {setCounter} counter={counter}/>
      </section>
      <section>
        <Increment setCounter={setCounter} counter = {counter} />
        <Decrement setCounter={setCounter} counter = {counter}/>
      </section>
      </div>
  );
}

export default App
