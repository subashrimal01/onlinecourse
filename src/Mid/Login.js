import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";


class Login extends Component{

    state ={
        username : '',
        password : ''
      }
      Login=(e)=>{
        this.setState({
          [e.target.name] : e.target.value
        })
      }
  
  
  Logindata=(e)=>{
    // do not reload the page on clicking the submit button
    e.preventDefault();
    // we need to send username and password to the api
    const loginData ={
      username : this.state.username,
      password : this.state.password
    }
    axios.post(('http://localhost:90/user/login'), loginData)
    .then((res)=>{
      console.log(res.data.t)
      localStorage.setItem('token', res.data.t);
      
    })
    .catch((err)=>{
      console.log(err.response)
    })
    window.location.href="/"
  }

    render(){
        return(
          <div>
            <div className="section layout_padding padding_bottom-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="heading_main text_align_center">
              <h2><span>Login</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section contact_section" style={{background: '#12385b'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="full float-right_img">
            <img src="images/img10.png" alt="#" />
          </div>
        </div>
        <div className="layout_padding col-lg-6 col-md-6 col-sm-12">
          <div className="contact_form">
            <form method="POST">
              <fieldset>
                <div className="full field">
                <input type="text" name="username" id="your_name" placeholder="Username"
                value={this.state.username}
                onChange={this.Login}/>
                </div>
                <div className="full field">
                <input type="password" name="password" id="your_pass" placeholder="Password"
                value={this.state.password}
                onChange={this.Login}/>
                </div>
                <div className="full field">
                <button type="submit" name="signin" id="signin" class="btn"
                onClick={this.Logindata}>Login</button>
                <NavLink to="/register"><button type="button" class="btn ml-4">Register Now</button></NavLink>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>			  
    </div>
  </div>
  </div>

        )
    }
}

export default Login;