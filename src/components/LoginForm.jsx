import React from 'react'

function LoginForm({err,obj,setobj,handleloginsubmit}) {
  return (
    <div id='register'>
        <h2>Login</h2>
        <form onSubmit={handleloginsubmit}>
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
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm