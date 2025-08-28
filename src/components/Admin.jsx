import React, { useEffect, useState } from 'react'
import axios from '../axios'
import List from './List'

function Admin() {
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
    function handledelete(id){
        const fetch = async()=>{
            try{
                const res = await axios.delete(`user/delete/${id}`);
                if(res.status == 204){
                    setusers(users.push.map((item)=>{
                        return item.userId != id
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
            <h2>Admin</h2>
            <table border="2px">
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>password</th>
                        <th>role</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item)=>{
                        return <tr>
                                    <List key={item.userId} item={item}/>
                                    <td><button onClick={()=>handledelete(item.userId)}>Delete</button></td>
                                </tr>
                    })}
                    
                </tbody>
            </table>
        </section>
    </>
  )
}

export default Admin