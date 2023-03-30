import axios from 'axios';
import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import AutoHideToast from '../Toast/AutoHideToast';

function Login() {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [toastState, setToastState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    try {
      const response = await axios.post("http://localhost:3000/login/login", { email, password });
      console.log(response);

      if (response.status === 200 && response.data.token) {
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { user: response.data.user }
        });
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
      setToastState(true);
    }
  };

  return (
    <div className="container" style={{backgroundColor: '#16ABC9',backgroundSize:'cover', height: '100vh'}}>
    <div className="d-flex justify-content-center align-items-center h-100">
        
      <form onSubmit={onSubmit}>
      <br></br>
        <h3 style={{textAlign:'center'}}>Login Page</h3>
        <table style={{ padding: "20px" }}>
          <tbody>
          <br></br>
            <tr>
              <td style={{ textAlign: "left", paddingRight: "10px" }}>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small id="emailvalid" className="form-text invalid-feedback">
                    Your email must be a valid northeastern email
                  </small>
                </div>
              </td>
              
            </tr>
            <br></br>
            <tr>
              <td style={{ textAlign: "left", paddingRight: "10px" }}>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <small id="passcheck" className="form-text invalid-feedback">
                    Please Fill the password
                  </small>
                </div>
              </td>
            </tr>
            <br></br>
            <tr>
              <td></td>
              <td>
                <div className="form-group">
                  <input
                    type="submit"
                    id="submitbtn"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <AutoHideToast
        title={"Login Error"}
        body={"Invalid Credentials"}
        showState={toastState}
        onCloseCallback={() => setToastState(false)}
      />
    </div>
    </div>
  );
}

export default Login;
