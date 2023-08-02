import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useAuthContext } from '../../context/authContext';

const LoginForm = () => {
  const navigate= useNavigate()
  const {logIn} = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    await logIn(email,password);
    navigate("/emplist");
    } catch (error) {
      console.log("error",error)
    }
  }
  return (
    <div className='container'>
      <div className='wrap__cont'>
        <h2>Log in to your account</h2>
        <div className='form__wrap'>
          <form className="form-floating" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Enter email id"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className='btn btn-success mt-3' type='submit'>Log in</button>
          </form>
          <h5 className='mt-3'>Don't have an account?<Link to="/register">Signup</Link></h5>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;