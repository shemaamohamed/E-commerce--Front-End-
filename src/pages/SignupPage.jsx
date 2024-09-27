import { useEffect, useState } from "react";
import { useAuth } from "../store/auth-context";

const SignupPage = () => {
    const {signup}=useAuth();
    const [data,setData]=useState(
        {
            username:'',
            email:'',
            password:''
        }
    );
  
    const changeHandler=(event)=>{
        setData((data)=>({...data,[event.target.name]:event.target.value}))
    }
    const submitHandler= async(event)=>{
        event.preventDefault();
        signup(data);
    }
    useEffect(()=>{
        // console.log(data);

    },[data])
  return (
    <div className="containerr">
    <div className="content border border-primary p-3 rounded shadow-lg">
    <form onSubmit={submitHandler} className="content__form">
        <h3>SignUp</h3>
        <div className="content__inputs">
        <label>
            <input 
            value={data.username}
            onChange={changeHandler}
            name="username"
            required=""
            type="text"
            placeholder='Enter username'/>
            <span> username</span>
        </label>
        <label>
            <input 
            value={data.email}
            onChange={changeHandler}
            name="email"
            required=""
            type="email"
            placeholder='Enter E-mail'/>
            <span> E-mail</span>
        </label>
        <label>
            <input
            value={data.password}
            onChange={changeHandler}
            name="password" 
            required="" 
            type="password"
            placeholder='Enter password'/>
            <span>Password</span>
        </label>
        </div>
        <button>SignUp</button>
    </form>
  
    </div>
</div>
  )
}

export default SignupPage