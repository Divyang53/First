import { React } from "react";
import "./TextInput.css";
 

function TextInput(props) {
  
    return(
    <>
    <input
    type={props.inputtype}
    placeholder={props.inputplaceholder}
    className="inputbox"

    onChange={(e) => props.onChange(e.target.value)}
     />
     </> 
  )
}
 

export default TextInput;
