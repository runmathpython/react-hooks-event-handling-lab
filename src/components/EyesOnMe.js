import React from "react";

function EyesOnMe(){
    function handleClick(eye){
      if(eye === "focus"){
        console.log("Good!")
      } else if(eye === "blur"){
          console.log("Hey! Eyes on me!")
      }
    }
  
  return(
      <div>
        <button onClick={() => handleClick("focus")} onMouseOver={() => handleClick("blur")}>Eyes on me</button>
        
      </div>
    )
  }

export default EyesOnMe;
