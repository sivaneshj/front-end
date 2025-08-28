import React, { useEffect, useState } from 'react'
import axios from '../axios'
import List from './List'
function Welcome({role}) {
  const [users,setusers] = useState([])
    useEffect(()=>{
        const fetch = async()=>{
            try{
                const res = await axios.get("/user/home");
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
  return (
    <>
        <section id='admin'>
            <h2>Users:</h2>
            <table border="2px">
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>password</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item)=>{
                        return <tr>
                                    <List key={item.userId} item={item}/>
                                    {role == "admin" && 
                                    <td><button>delete</button></td> }
                                </tr>
                    })}
                    
                </tbody>
            </table>
        </section>
    </>
  )
}

export default Welcome