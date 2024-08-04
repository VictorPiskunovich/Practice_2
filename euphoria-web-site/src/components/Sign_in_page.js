import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../styles/Sign_in_page.scss'

const Sign_in_page = ({token, setToken}) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setError("");
    setPassword("");
    setUsername("");
    axios({
      url:"https://fakestoreapi.com/auth/login",
      method:"POST",
      data: {
        username: userName,
        password: password,
      },
    }).then(res=> {
      console.log(res.data.token);
      setToken(res.data.token);
      localStorage.setItem("userToken", res.data.token);
      navigate('/shop');
    }).catch(err=>{
      if (err.response) {
        console.log(err.response);
        setError(err.response.data);
      } else {
        console.error("Ошибка сети или сервера:", err);
        setError("An unexpected error occurred.");
      }
    });
  };

    return (
      <section className="sign_in_page">
        <div>
          <img src="/img/sign_in_photo.png" alt="photo" className="sign_in_page_photo" />
        </div>
        <div className="sign_in_page_content">
          <h1>Sign In Page</h1>
          <br/><br/>
          <p className='roboto-regular'>User name or email address</p>
          <input type="text" className="input" value={userName} onChange={(e) => setUsername(e.target.value)} />
          <br/><br/><br/>
          <div className="password">
            <p className='roboto-regular'>Password</p>
            <div className="hide_image">
              <img className="eye_icon" src="/img/Hide.png" alt=""/>
              <p className="hide roboto-regular">Hide</p>
            </div>
          </div>
          <input type="password" className="input"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <p className="forget">Forget your password</p>

          <div className="sign_in_block">
            <button className="sign_in_button" onClick={loginHandler}>Sign In</button>
            <p className="sign_up_button roboto-regular">Don’t have an account? <u>Sign up</u></p>
          <br/>
            {error && <small className='Error'>{error}</small>}
          </div>

        </div>
      </section>
    );
}

export default Sign_in_page