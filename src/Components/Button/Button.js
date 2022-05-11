import { React } from "react";
import "../Button/Button.css";
 
function Button(props) {
  
    return (

    <input
      class="first" 
      type={props.inputtype}
      value={props.inputvalue}
      onClick={props.onClick}
    />
  );
}

export default Button;
