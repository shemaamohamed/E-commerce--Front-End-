import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



export const authContext =createContext({
    user:{_id:"",username:""},
    login:(user)=>{},
    signup:(user)=>{},
    logout:()=>{},
});
export const useAuth=()=>useContext(authContext);
function AuthProvider({children}){
    const navigate=useNavigate();

    const[user,setUser]=useState(null);

    const login=(user)=>{
        axios.post('https://fakestoreapi.com/auth/login', JSON.stringify(user))
          .then(function (response) {
            setUser(user)
            toast.success("Login Successfull")
            setTimeout(()=>{
            navigate("/items")
            },1500)
          })
          .catch(function (error) {
            toast.error("E-mail or password is wrong")
            console.log(error);
          });
        

    }
    const signup=(user)=>{
        axios.post(process.env.REACT_APP_BASE_URL +'users/signup', user)
          .then(function (response) {
            toast.success("Successfully register")
            setTimeout(()=>{
            navigate("/login")
            },1500)
          })
          .catch(function (error) {
            toast.error("E-mail  already exists")
            console.log(error);
          });
        

    }
    const logout=()=>{
        setUser(null)
    }
    useEffect(()=>{
        if(user){
            localStorage.setItem('user',JSON.stringify(user))

        }else{
            localStorage.removeItem('user')
        }
    },[user])
    return <authContext.Provider value={{user,login,logout,signup}}>{children}</authContext.Provider>
}
export default AuthProvider;