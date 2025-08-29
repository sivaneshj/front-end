import React, { useEffect, useState } from 'react'
import axios from '../axios'
import List from './List'

function Welcome() {
  const [users,setusers] = useState([])
  const role = localStorage.getItem("role") || "";
  
    useEffect(()=>{
        const fetch = async()=>{
            try{
                const res = await axios.get("/users/");
                if(res.status == 200){
                    setusers(res.data);
                    console.log(res);
                }
            }catch(err){
                console.log(err);
            }
        }
        (async()=>fetch())();
    },[])
    function handledelete(name){
            const fetch = async()=>{
                try{
                    const res = await axios.delete(`/users/${name}`);
                    if(res.status == 204){
                        setusers(users.filter((item)=>{
                            return item.userName != name
                        }))
                    }
                }catch(err){
                    console.log(err);
                }
            }
            (async()=>await fetch())();
        }
  return (
    <>
        <section id='admin'>
            <h2>{role == "admin" ? "Hello, Admin" : "Hello, user:"}</h2>
            <table border="2px">
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>password</th>
                        <th>role</th>
                        {role=="admin" &&
                            <th>Delete</th>}
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((item)=>{
                        return <tr key={item.userId}>
                                    <List key={item.userId} item={item}/>
                                    {role && 
                                    <td><button onClick={()=>handledelete(item.userName)}>Delete</button></td> }
                                </tr>
                    })}
                </tbody>
            </table>
        </section>
    </>
  )
}

export default Welcome