function Increment(props){
    const increment = () =>{
       // alert("it had incremented");
        props.setCounter(props.counter + 1)
    };
    return(
        <button 
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            margin: "10px",
            borderColor: "white",
            borderRadius:"100px",

          }}
          onClick={increment}>
            Increment
          </button>
          
    );
}
export default Increment;