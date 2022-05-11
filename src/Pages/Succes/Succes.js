import {React,useState} from 'react'
import { useSelector } from "react-redux";
 
 

const Succes = () => {
  const state = useSelector((state) => state?.newuser);
  const [newData, setNewData] = useState("");
  return (
     <div>
      Login Succesful!!!!
      <p>{newData?.firstName}</p>
      <p>{newData?.lastName}</p>
      <p>{newData?.email}</p>
      <p>{newData?.password}</p>
     </div>
  )
}
 

export default Succes