
import { useState, useEffect } from 'react';
import { useAuth } from '../store/auth-context';
import '../style/login.css'

function Login(){
    const {login}=useAuth();
    const [data,setData]=useState(
        {
            email:'',
            password:''
        }
    );
    const changeHandler=(event)=>{
        setData((data)=>({...data,[event.target.name]:event.target.value}))


    }
    const submitHandler=async(event)=>{
        event.preventDefault();
        login(data);

       

        

    }
    useEffect(()=>{

    },[data])

    return(
        <>
        <div className="containerr">
            <div className="content border border-primary p-3 rounded shadow-lg">
            <form onSubmit={submitHandler} className="content__form">
                <h3>Login</h3>
                <div className="content__inputs">
                <label>
                    <input 
                    onChange={changeHandler} name="email" required="" type="email" placeholder='Enter email'/>
                    <span> E-mail</span>
                </label>
                <label>
                    <input onChange={changeHandler} name="password"  required="" type="password" placeholder='Enter password'/>
                    <span>Password</span>
                </label>
                </div>
                <button>Log In</button>
            </form>
          
            </div>
  </div>
        </>

    );

}
export default Login;