import React, { useContext } from 'react'
import DataContext from '../usecontext/DataContext'

function LoginForm() {
    const {update,setupdate, handleupdatesubmit,seterr,err,obj,setobj,handleloginsubmit,handleupdate} = useContext(DataContext);
  return (
    <div id='register'>
        <h2>{update ? "update credentials:":"Login"}</h2>
        <form onSubmit={update ? handleupdatesubmit:handleloginsubmit}>
            <input type="text" name='userName' value={obj.userName} onChange={
                (e)=>{
                    setobj((prev)=>{
                        return {
                            ...prev,
                            [e.target.name]:e.target.value
                        }
                    })
                }
            }placeholder='Enter UserName'/>
            <input type="password" name='password' value={obj.password} onChange={
                (e)=>{
                    setobj((prev)=>{
                        return {
                            ...prev,
                            [e.target.name]:e.target.value
                        }
                    })
                }
            }placeholder='Enter password'/>
            {err && <p>{err}</p>}
            {!update && <p onClick={()=>{
                handleupdate();
                seterr("");
                }}>forget password ?</p>}
            {update && <p onClick={()=> {
                setupdate("")
                seterr("")}}>Back to login ?</p>}
            <button type='submit'>{update ? "update" : "Login"}</button>
        </form>
    </div>
  )
}

export default LoginForm