import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const state = useSelector((state) => state?.newuser);
  const [newData, setNewData] = useState("");

   
   
  useEffect(() => {
    setNewData(state?.getRegistration);
    setNewData(state?.getLogindetails);
  }, [state]);
  console.log(state, "redux");
  

  return (
    <div>
      <p>{newData?.firstName}</p>
      <p>{newData?.lastName}</p>
      <p>{newData?.email}</p>
      <p>{newData?.password}</p>
    </div>
  );
};

export default Data;
