import React,{useState} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { LoginForm } from '../../components/login/Login.comp'
import './entry.style.css'

export const Entry = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const HandleChange=(e)=>{
   const {name,value} = e.target
   if(name==="email"){
     setEmail(value)
   }else{
     setPassword(value)
   }
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm HandleChange={HandleChange} email={email} password={password}/>
     </Jumbotron>
    </div>
  )
}



