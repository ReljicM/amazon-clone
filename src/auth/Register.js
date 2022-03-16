import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { db } from '../firebase'


function Register() {
  
    const navigate = useNavigate();
    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [rePass, setRePass] = useState('');
    const [error, setError] = useState(false);

    const register = e => {
      e.preventDefault();
          createUserWithEmailAndPassword(auth,email,password)
          .then((resp) => {
            if (resp) {
              navigate('/')
            }
            console.log(resp)
            return db.collection('users').doc(resp.user.uid).set({
              Name: name,
              Email: email,
              Password: password
          })
          .catch(error => alert(error.message))
          }
      )}
  return (
    <div className="login">
            <Link to="/">
          <img
          className="login__logo"
          src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"/>
          </Link>
      <div className="login__container">
              <h1>Create Account</h1>

              <form onSubmit={register}>
                  <h5>Your name</h5>
                  <input
                  style={{borderColor: error ? "#d00"  : "" }}
                  defaultValue={name}
                  onChange={e => setName(e.target.value)}
                  type="text" />
                  {error ? (
                  <p style={{ color: "red" }}>
                    Enter your email
                  </p>
                ) : (
                  ""
                )}
                <h5>Mobile number or email</h5>
                <input
                  style={{borderColor: error ? "#d00"  : "" }}
                  defaultValue={email}
                  onChange={e => setEmail(e.target.value)}
                  type="text" />
                  {error ? (
                  <p style={{ color: "red" }}>
                    Enter your email
                  </p>
                ) : (
                  ""
                )}
                <h5>Password</h5>
                <input
                  style={{borderColor: error ? "#d00"  : "" }}
                  defaultValue={password}
                  onChange={e => setPasword(e.target.value)}
                  type="text" />
                  {error ? (
                  <p style={{ color: "red" }}>
                    Enter your email
                  </p>
                ) : (
                  ""
                )}
                <h5>Re-Password</h5>
                <input
                  style={{borderColor: error ? "#d00"  : "" }}
                  defaultValue={rePass}
                  onChange={e => setRePass(e.target.value)}
                  type="text" />
                  {error ? (
                  <p style={{ color: "red" }}>
                    
                  </p>
                ) : (
                  ""
                )}
                  <button type="submit" className="login__signInButton">Continue</button>
              </form>

              <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
              </p>
          </div>
          <div className="login__divider">
            <hr className="login__divider_left"/>New to Amazon?<hr className="login__divider_right" />
            <button type="submit" className="login__registerButton">Create your Amazon Account</button>
          </div>
        </div>
  )
}

export default Register;