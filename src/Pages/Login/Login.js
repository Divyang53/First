import { React, useState } from "react";
import LOGO from "../../assets/logo.png";
import "./Login.css";
// import Forgetpass from '../Forgetpass/Forgetpass';
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput/TextInput";
import { useDispatch,useSelector } from "react-redux";
import { getLogindetails} from "../../Components/Redux/Action/action";
import Button from "../../Components/Button/Button";
import Data from "../../Components/Redux/Data/Data";
import { useNavigate } from "react-router-dom";

 

  const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.newuser);
  const Navigate = useNavigate()
  
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const textInputChange = (value, type) => {
    if (type === "email") {
      console.log("email is", value);
      setEmail(value);
    } else if (type === "pass") {
      console.log("password is", value);
      setPassword(value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(email,"try");
    let data = {
      Email: email,
      Password: password,
 
    };
    dispatch(getLogindetails(data));
    valid()

    // console.log(getLogindetails)
  };
  function valid () {
    if (
      state?.getRegistration.Email === state?.getLogindetails.Email &&
      state?.getRegistration.Password === state?.getLogindetails.Password
    ) {
      console.log("Login Succesful");
      Navigate("/Succes")
    }
    else  alert("invalid")
    
  };
  
   
 

  return (
    <div>
    <div className="login">
      <div class="center">
        <img src={LOGO} alt="" />

        <h4 class="site">Figma Live</h4>
        <h1>Login To Figma</h1>

        <div class="plain">
          <p>Enter Email and Password to Login</p>
        </div>

        <div class="txt_field">
          <label>Email</label>
          {/* <input type="text" required placeholder="Enter Email" />
           */}
          <TextInput
            inputtype="text"
            inputplaceholder="Enter Email"
            onChange={(val) => textInputChange(val, "email")}
            
          />
        </div>

        <div class="txt_field">
          <label>Password</label>
          {/* <input type="password" required placeholder="Enter Password" />
           */}

          <TextInput
            inputtype="password"
            inputplaceholder="Enter Password"
            onChange={(val) => textInputChange(val, "pass")}
            
          />
        </div>

        {/* <div class="pass"> Forgetpassword?</div> */}

        <Link class="pass" to="/forget">
          
          Forgetpassword?
        </Link>

        <Link class="pass" to="/register">
          {/* {" "} */}
          Don't Have Account Create Here?
        </Link>

         
 
        <Button
          
          inputtype="submit"
          inputvalue="Login"
          onClick={submit} 
           
        />
      </div>
   
    </div>
    <Data/>
    </div>
  );
};

export default Login;
 