import React, { useContext } from 'react'
import DataContext from '../usecontext/DataContext'

function Register() {
    const {err, obj, setobj, handleregsubmit} = useContext(DataContext);
  return (
    <div id='register'>
        <h2>Register</h2>
        <form action="" onSubmit={handleregsubmit}>
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
            <input type="text" name='role' value={obj.role} onChange={
                (e)=>{
                    setobj((prev)=>{
                        return {
                            ...prev,
                            [e.target.name]:e.target.value
                        }
                    })
                }
            }placeholder='Enter your role'/>
            {err && <p>{err}</p>}
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register