import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="singin col-lg-4 container mt-5">
        <div className="card border border-dark border-4">
          <div className="card-header text-large">
            <h1>Sign In</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label text-muted">
                  Remember Me
                </label>
              </div>
              <div className="text-left">
                <button type="submit" className="btn btn-primary ml-2">
                  Sign In
                </button>
                <Link to="/signup" className="mt-2 ml-5">
                  <span>Not registered yet? Sign up here</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
