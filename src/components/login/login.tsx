import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import request from "../../requests/request";
import Title from "../kit/title"
interface AddTodoProps { 
  setToken?: Dispatch<SetStateAction<undefined>>
}
function getDataSummary(data: any) {
  return request(`/admin/login`, {
    method: "POST",
    data: data,
  });
}
function Login(props: AddTodoProps) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  var info = {
    email: username,
    password: password
  }
  const handleSetUserName = (e: React.FormEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value)
    info.email = username
  }
  const handleSetPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    info.password = password
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* axios.post(`http://localhost:8000/api/admin/login`, info)
      .then(res => {
        props.setToken?.(res.data.access_token)
      }) */
      getDataSummary(info).then(res => {
        props.setToken?.(res.data.access_token)
      });      
  }
  
  return (
    <div>
      <Title nameTitle={"Login"} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user"
                            id="exampleInputEmail" aria-describedby="emailHelp"
                            placeholder="Enter Email Address..." 
                            onChange={handleSetUserName}
                          />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Password"
                            onChange={handleSetPassword}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                        <button className="btn btn-primary btn-user btn-block" type="submit">
                          Login
                        </button>
                        <hr />
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw"></i> Login with Google
                        </a>
                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">Create an Account!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login