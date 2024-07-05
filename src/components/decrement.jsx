function Decrement(props){
    const decrement = () =>{
        //alert("it had decremented");
        props.setCounter(props.counter -1)
    };
    return(
        <button 
          style={{
            background: "red",
            color: "black",
            padding: "10px",
            margin: "10px",
            borderColor: "white",
            borderRadius:"100px",
          }}
          onClick={decrement}>
          
Decrement
</button>

);
}
export default Decrement;