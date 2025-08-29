
import React from 'react'
import { createContext, useEffect,useState } from 'react';
import axios from '../axios'
import {useNavigate } from 'react-router-dom'

const DataContext = createContext({});
export const DataProvider= ({children}) =>{
    const [obj,setobj] = useState({
        userName:"",
        password:"",
        role:""
  })
  const [err,seterr] = useState("");
  const navigate = useNavigate();
  const [update,setupdate] = useState("");

  function handleregsubmit(e){
    e.preventDefault();
    seterr("");
    const fetch = async()=>{
      try{
        const res = await axios.post("/users/create/",obj);
        console.log(res);
        
        if(res.status == 201){
          setobj({
            userName:"",
            password:"",
            role:""
          })
          navigate("/login");
        }
      }catch(err){
        seterr(err.response.data);
      }
    }
    (async()=>await fetch())();
  }

  function handleloginsubmit(e){
    e.preventDefault();
    seterr("");
    const fetch = async()=>{
      try{
        const res = await axios.post("/users/login/",obj);
        
        if(res.status == 200){
          if(res.data.role == "admin"){
            localStorage.setItem("role","admin");
          }
          setobj({
            userName:"",
            password:"",
            role:""
          })
          navigate("/home")
        }
      }catch(err){
        seterr(err.response.data);
      }
    }
    (async()=>await fetch())();
  }

  function handlelogout(){
    localStorage.removeItem("role");
    navigate("/");
  }
  
  function handleupdate(){
    setupdate("active");
  }
  function handleupdatesubmit(e){
    e.preventDefault();
    seterr("");
    const fetch = async()=>{
      try{
        const res = await axios.put(`/users/${obj.userName}`,{
          password:obj.password
        });
        if(res.status == 200){
          setobj({
            userName:"",
            password:"",
            role:""
          })
          setupdate("");
          navigate("/login")
        }
      }catch(err){
        seterr(err.message);
      }
    }
    (async()=>await fetch())();
  }
  return (
    <DataContext.Provider value={
        {obj,setobj,err,seterr,navigate, update, setupdate,handleloginsubmit,handlelogout,
            handleregsubmit, handleupdate, handleupdatesubmit
        }
    }>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext