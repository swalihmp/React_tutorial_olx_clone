import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import { Link } from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogin = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')

    }).catch((error)=>{
      alert(error.message)
    })
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        
        <Link className='nav-items' to='/signup'>SIgnup</Link>
      </div>
    </div>
  );
}

export default Login;
