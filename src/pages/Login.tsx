import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { redirect } from 'react-router-dom'

const Login = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const userRef = useRef<HTMLInputElement>(null)
  const errorRef = useRef<React.LegacyRef<HTMLParagraphElement>>(null)

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    userRef.current?.focus()

  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    try {
      await auth.authenticate(user,pwd)
      
      setUser('')
      setPwd('')
      console.log(auth)
      
      navigate('/profile')

    } catch (err) {
      throw new Error('Username or password invalid')
    }


  }
  
  return (
    <>
      {success ? (
        <section>
          <h1>
            You are authenticated
          </h1>
        </section>
      ) : (
      <section>
        <p ref={errorRef.current} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
          {errMsg}
        </p>
        <h1>
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>
            Username: 
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete='off'
            onChange={e => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor='password'>
            Password: 
          </label>
          <input
            type="password"
            id="password"
            autoComplete='off'
            onChange={e => setPwd(e.target.value)}
            value={pwd}
            required
          />

          <button>
            Sign In
          </button>

        </form>
      </section>
      )}
    </>
  )
}

export default Login