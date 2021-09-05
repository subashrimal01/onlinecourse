import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Register extends Component{

    state = {
        username: '',
        email: '',
        password: ''
    }

    onchangeRegistration=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    Register=(e)=>{
        e.preventDefault()
        //send data to my api
        const data={
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:90/user/register", data)
        
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
                        <h2><span>Register</span></h2>
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
                      <form action="contact.html">
                        <fieldset>
                          <div className="full field">
                          <input type="text" name="username" placeholder="Username"
                          value={this.state.username} onChange={this.onchangeRegistration}/>
                          </div>
                          <div className="full field">
                          <input type="email" name="email" placeholder="Your Email"
                          value={this.state.email} onChange={this.onchangeRegistration}/>
                          </div>
                          <div className="full field">
                          <input type="password" name="password" placeholder="Password"
                          value={this.state.password} onChange={this.onchangeRegistration}/>
                          </div>
                          <div className="full field">
                          <button type="submit" name="signup" id="signup" class="form-submit"
                          onClick={this.Register}>Register</button>
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

export default Register;