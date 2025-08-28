import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from './axios'
import Welcome from './components/Welcome'
import Admin from "./components/Admin"

function App() {
  const [count, setCount] = useState(0)
  const [obj,setobj] = useState({
    userName:"",
    password:"",
    role:""
  })
  const [err,seterr] = useState("");
  const navigate = useNavigate();

  function handleregsubmit(e){
    e.preventDefault();
    seterr("");
    const fetch = async()=>{
      try{
        const res = await axios.post("/user/register",obj);
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
        seterr(err.message);
      }
    }
    (async()=>await fetch())();
  }
  function handleloginsubmit(e){
    e.preventDefault();
    seterr("");
    const fetch = async()=>{
      try{
        const res = await axios.post("/user/login",obj);
        if(res.status == 200){
          if(res.data == "admin"){
            navigate("/admin");
          }else{
            navigate("/user")
          }
          setobj({
            userName:"",
            password:"",
            role:""
          })

        }
      }catch(err){
        seterr(err.message);
      }
    }
    (async()=>await fetch())();
  }
  return (
    <main id='app'>
      <Navbar/>
      <section id='content'>
        <Routes>

          <Route path='/admin' element={<Admin/>}/>
          <Route path='/user' element={<Welcome err={err} obj={obj} handleloginsubmit={handleloginsubmit} setobj={setobj}/>}/>
          <Route path='/login' element={<LoginForm err={err} obj={obj} handleloginsubmit={handleloginsubmit} setobj={setobj}/>}/>
          <Route path='/register' element={<Register obj={obj} err={err} handleregsubmit={handleregsubmit} setobj={setobj}/>}/>
        </Routes>
          
      </section>
      <Footer/>
    </main>
  )
}

export default App
