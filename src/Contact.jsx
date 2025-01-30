import axios from "axios";
import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      username:"",
      useremail:"",
      userno:"",
      usermsg:"",
    };
  }

  saveForm = async(e)=>{
    e.preventDefault();
    console.log(this.state);
    await axios.post('http://localhost:3000/contact',this.state);
    this.setState({
      username:"",
      useremail:"",
      userno:"",
      usermsg:"",
    })
    window.location.href = "/";
  }

  render() {
    return (
      <>
        <div className="row m-0 p-0">
          <img src="images/contact.avif" width="100%" className="p-0" alt="" />
        </div>

        <div className="row m-0 p-5"  style={{backgroundColor:"#FBF4F0"}}>
          <h1
            className="text-dark fw-bold text-center"
            style={{ fontVariant: "small-caps" }}
          >
            Write A Message
          </h1>

          <div className="col-lg-6 col-md-10 col-12 m-0 px-5 py-3 my-3 m-auto bg-light">
            <form
              action="" 
              onSubmit={(e) => {
                this.saveForm(e);
              }}
            >
              <div className="form-group my-4">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name="username" className="form-control"
                  value={this.state.username}
                  onChange={(e) =>
                    this.setState({ username: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="useremail" className="form-control"
                  value={this.state.useremail}
                  onChange={(e) =>
                    this.setState({ useremail: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  name="userno" className="form-control"
                  value={this.state.userno}
                  onChange={(e) =>
                    this.setState({ userno: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="">Message</label>
                <input
                  type="text"
                  name="usermsg" className="form-control"
                  value={this.state.usermsg}
                  onChange={(e) =>
                    this.setState({ usermsg: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group my-4 text-center">
                <button className="btn btn-dark text-light">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
