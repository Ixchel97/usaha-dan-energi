import React, { useContext, useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const login = () => {
    const [error,setError] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/energi-kinetik");
  })
  .catch((error) => {
    setError(true);
  });
    }
  return (
    <div className="login">
        <form onSubmit={handleLogin}>
            <h2 className='form-header'>Login</h2>
            <label className='text1'>Email</label>
            <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)} />
            <label className='text2'>Password</label>
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error &&<span>email atau password yang anda masukkan salah !</span>}
        </form>
    </div>
  )
}

export default login