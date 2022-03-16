import "./Login.scss";

const Login = () => {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>

          <span>
            Now to Netflix? <b>Sign up Now</b>{" "}
          </span>
          <small>
            This page is Proteced by google reCAPTURE to ensure you're not a
            bot. <b>Lear more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
