import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [authentication, setAuthentication] = useState("");
  const handleSubmit = () => {
    if (username == "richa") {
      // setAuthentication(true);
      localStorage.setItem("isAuthenticated", true);
    } else {
      localStorage.setItem("isAuthenticated", false);
    }
    navigate("/all");
  };
  return (
    <>
      <div
        id="homepage-block-3"
        className="bgMove loginBackground loginPage"
        style={{ backgroundImage: "url(assets/images/_homepage-1-bg.jpg)" }}
      >
        <div className="container login">
          <div className="login-header">
            <h1> Login As Admin</h1>
          </div>
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              className="usernameBox"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="submit"
              className="btn btn-yellow btn-bg-dark btn-lg"
              value="Login"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
