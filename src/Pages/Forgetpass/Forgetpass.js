import { React } from "react";
import "./forgetpass.css";
import TextInput from "../../Components/TextInput/TextInput";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Forgetpass = () => {
  return (
    
    <div className="forget">
      <div class="centerforg">
        <div class="plain">
          <p>Enter Email</p>
        </div>

        <div class="txt_field">
          <label>Email</label>

          <TextInput
            inputtype="text"
            inputplaceholder="Enter Email"
            />
         

        <Link class="pass" to="/">
          {/* {" "} */}
           Have Account Click Here?
        </Link>

      <Button inputtype="submit" inputvalue="Submit"   />
      </div>
    </div>
    </div>
  );
};

export default Forgetpass;
