import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// imoprt twiterImage from '../Image/twiterImage.jpg';
import twiterImage from "../Image/twitter.jpeg";
import auth from "../../../firebase.init";
import TwitterIcon from "@mui/icons-material/Twitter";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const [username, setUsername] = useState();
  const [name, setName] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, name, email, password);
    createUserWithEmailAndPassword(email, password)}
    

  //   const [signInWithEmailAndPassword, user, loading, error] =
  //     useSignInWithEmailAndPassword(auth);
  //   console.log(user);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Registered User: {user.user.email}</p>
          </div>
        );
      }


  return (
    <>
      <div className="login-container">
        <div image-container>
          <img className="image" src={twiterImage} alr="Twiter Iamge"></img>
        </div>
        <div className="form-container">
          <div className="form-box">
            <TwitterIcon></TwitterIcon>

            <h2 className="heading">Happening Now</h2>
            <div class="d-flex align-items-sm-center">
              <h3 className="heading1">Join twitter today </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="Display-name"
                type="text"
                placeholder="@username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                className="Display-name"
                type="text"
                placeholder="Enter full Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="Display-name"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Pasword"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="btn-login">
                <button className="bt-submit" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
            <hr></hr>
          </div>
          <div> Goole Button</div>
          <div>
            ALready Have an Account
            <Link to="/Login">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
