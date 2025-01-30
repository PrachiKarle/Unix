import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

class Sign extends React.Component {
  constructor() {
    super();
    this.state = {
      useremail: "",
      userpass: "",
    };
  }

  render() {
    const signin = async (e) => {
      e.preventDefault();

      //login validation
      var LoginData = await axios.get("http://localhost:3000/accounts");
      var flag = false;

      LoginData.data.map((val, i) => {
        if (
          val.useremail === this.state.useremail &&
          val.userpass === this.state.userpass
        ) {
          flag = true;
          alert("Login Successfully!");
          this.setState({
            useremail: "",
            userpass: "",
          });
          window.location.href = "/";
        }
      });

      if (!flag) {
        alert("Invalid Login Credentials!");
        window.location.href = "/signin";
      }
    };

    return (
      <div style={{ backgroundColor:  "#FBF4F0"  }}>
        <div className="row m-0 p-5">
          <div
            className="col-lg-6 col-md-8 col-12 m-0 px-5 py-3 m-auto "
            style={{ backgroundColor:"white" }}
          >
            <h5 className="text-center" style={{ fontVariant: "small-caps" }}>
              Log In
            </h5>
            <form action="" onSubmit={(e) => signin(e)}>
              <div className="form-group my-4">
                <label htmlFor="">
                  Email <sup className="text-danger">*</sup>
                </label>
                <input
                  type="email"
                  name="useremail"
                  required
                  className="form-control"
                  value={this.state.useremail}
                  onChange={(e) => this.setState({ useremail: e.target.value })}
                />
              </div>

              <div className="form-group my-4">
                <label htmlFor="">
                  Password <sup className="text-danger">*</sup>
                </label>
                <input
                  type="password"
                  name="username"
                  required
                  className="form-control"
                  value={this.state.userpass}
                  onChange={(e) => this.setState({ userpass: e.target.value })}
                />
              </div>
              <div className="form-group my-4 text-center">
                <button className="btn btn-dark">Sign in</button>
              </div>
            </form>

            <h6
              className="text-center fw-normal my-4"
              style={{ fontSize: "small" }}
            >
              New Here ?{" "}
              <NavLink to="/create" className="text-dark">
                Create Account
              </NavLink>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign;
