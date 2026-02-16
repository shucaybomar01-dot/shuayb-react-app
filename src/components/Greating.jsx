import { Fragment } from "react";

function Greating(props) {
    return (
      <div style={{backgroundColor:"black",color:"whitesmoke"}}>
        <h1>
          hello, {props.name} {props.surename}!
        </h1>
        <h2>this text was not there</h2>
      </div>
    ); 
}

export default Greating;
