import React, { useState } from "react";
import "./Register.css";
import logo from "../../assets/register.png";
import TextInput from "../../Components/TextInput/TextInput";
import { useDispatch } from "react-redux";
import { getRegistration } from "../../Components/Redux/Action/action";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
// import Data from "../../Components/Redux/Data/Data";


const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const textInputChange = (value, type) => {
    if (type === "firstname") {
      console.log("firstname is", value);
      setName(value);
    } else if (type === "lastname") {
      console.log("lastname is", value);
      setLastName(value);
    } else if (type === "email") {
      console.log("email is", value);
      setEmail(value);
    } else if (type === "password") {
      console.log("password is", value);
      setPassword(value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(name, "try");
    let data = {
      firstname: name,
      lastName: lastname,
      Email: email,
      Password: password,
    };
    dispatch(getRegistration(data));
  };
  return (
    // <div className="register">
    //   <div className="front">
    //     <img class ="logo" src={logo} alt="" />

    //     <h3 class="uper">Register Here</h3>

    //     <div class="txt_field1">
    //       <label>First Name</label>
    //       <TextInput
    //         inputtype="text"
    //         inputplaceholder=" Enter Firstname"
    //         id="text"
    //         onChange={(val) => textInputChange(val, "firstname")}
    //       />
    //     </div>

    //     <div class="txt_field1">
    //       <label>Last Name</label>
    //       <TextInput
    //         inputtype="text"
    //         inputplaceholder="Enter Lastname"
    //         id="text"
    //         onChange={(val) => textInputChange(val, "lastname")}
    //       />
    //     </div>

    //     <div class="txt_field1">
    //       <label>Email</label>
    //       <TextInput
    //         inputtype="text"
    //         inputplaceholder="Enter Email"
    //         id="text"
    //         onChange={(val) => textInputChange(val, "email")}
    //       />
    //     </div>

    //     <div class="txt_field1">
    //       <label>Password</label>
    //       <TextInput
    //         inputtype="password"
    //         inputplaceholder="Enter Password"
    //         id="text"
    //         onChange={(val) => textInputChange(val, "password")}
    //       />
    //     </div>

    //     {/* <input class="fina" type="submit" value="Submit" /> */}
    //     <Button
          
    //       inputtype="submit"
    //       inputvalue="Submit"
           
    //       onClick={submit}
    //     />
    //   </div>
    // </div>

    <div>
    <div className="register">
      <div class="centerReg">
        <img src={logo} alt="" />

        <h4 class="site">Figma Live</h4>

        <h1 class="uper">Register Here</h1>

        <div class="txt_field">
        <label>First Name</label>
          <TextInput
            inputtype="text"
            inputplaceholder=" Enter Firstname"
            id="text"
            onChange={(val) => textInputChange(val, "firstname")}
          />
        </div>
        
        <div class="txt_field">
        <label>Last Name</label>
          <TextInput
            inputtype="text"
            inputplaceholder="Enter Lastname"
            id="text"
            onChange={(val) => textInputChange(val, "lastname")}
          />
        </div>

        <div class="txt_field">
        <label>Email</label>
          <TextInput
            inputtype="text"
            inputplaceholder="Enter Email"
            id="text"
            onChange={(val) => textInputChange(val, "email")}
          />
        </div>

        <div class="txt_field">
        <label>Password</label>
          <TextInput
            inputtype="password"
            inputplaceholder="Enter Password"
            id="text"
            onChange={(val) => textInputChange(val, "password")}
          />
        </div>

        {/* <div class="pass"> Forgetpassword?</div> */}

        <Link class="pass" to="/">
          {/* {" "} */}
          Already Have Account click Here?
        </Link>

        {/* <input type="submit" value="Login" id="btn" /> */}
 
        <Button
          
          inputtype="submit"
          inputvalue="Submit"
           
          onClick={submit}
        />
      </div>
   
    </div>
    {/* <Data/> */}
    </div>
  );
};

export default Register;
