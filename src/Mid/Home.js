import { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component{
    render(){
        return(       
<div>
<div className="ulockd-home-slider">
            <div className="container-fluid">
                <div className="row">       
                <div className="pogoSlider" id="js-main-slider">
                    <div className="pogoSlider-slide" style={{backgroundImage: 'url(images/banner_img.png)'}}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="slide_text">
                            <h3><span span className="theme_color">You only have know one thing</span><br />you can learn anything</h3>
                            <h4>Free Educations</h4>
                            <br />
                            <div className="full center">
                                <NavLink className="contact_bt" to="/courses">Start a Course</NavLink>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pogoSlider-slide" style={{backgroundImage: 'url(images/banner_img.png)'}}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="slide_text">
                            <h3><span span className="theme_color">You only have know one thing</span><br />you can learn anything</h3>
                            <h4>Free Educations</h4>
                            <br />
                            <div className="full center">
                                <a className="contact_bt" href="/courses">Start a Course</a>
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
            
  <div className="section tabbar_menu">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="tab_menu">
            <ul>
              <li><a href="#"><span className="icon"><img src="images/i1.png" alt="#" /></span><span>University Life</span></a></li>
              <li><a href="#"><span className="icon"><img src="images/i2.png" alt="#" /></span><span>Graduation</span></a></li>
              <li><a href="#"><span className="icon"><img src="images/i3.png" alt="#" /></span><span>Athletics</span></a></li>
              <li><a href="#"><span className="icon"><img src="images/i4.png" alt="#" /></span><span>Social</span></a></li>
              <li><a href="#"><span className="icon"><img src="images/i5.png" alt="#" /></span><span>Location</span></a></li>
              <li><a href="#"><span className="icon"><img src="images/i6.png" alt="#" /></span><span>Call us</span></a></li>
              <li><a href="#"><span className="icon"><img src="images/i7.png" alt="#" /></span><span>Email</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section margin-top_50">
    <div className="container">
      <div className="row">
        <div className="col-md-6 layout_padding_2">
          <div className="full">
            <div className="heading_main text_align_left">
              <h2><span>Welcome To</span> Education</h2>
            </div>
            <div className="full">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="full">
              <a className="hvr-radial-out button-theme" href="#">About more</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="full">
            <img src="images/img2.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="heading_main text_align_center">
              <h2><span>Popular </span>Courses</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="full blog_img_popular">
            <img className="img-responsive" src="images/p1.png" alt="#" /> 
            <h4>Financial Accounting</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="full blog_img_popular">
            <img className="img-responsive" src="images/p2.png" alt="#" />
            <h4>Managerial Accounting</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="full blog_img_popular">
            <img className="img-responsive" src="images/p3.png" alt="#" />
            <h4>Intermediate Accounting</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section margin-top_50 silver_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="full float-right_img">
            <img src="images/img6.png" alt="#" />
          </div>
        </div>
        <div className="col-md-6 layout_padding_2">
          <div className="full">
            <div className="heading_main text_align_left">
              <h2><span>Apply for Admission</span></h2>
            </div>
            <div className="full">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="full">
              <a className="hvr-radial-out button-theme" href="#">Apply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section layout_padding padding_bottom-0">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="full">
            <div className="heading_main text_align_left">
              <h2><span>Reaserch</span></h2>
            </div>
            <div className="full">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="full">
              <a className="hvr-radial-out button-theme" href="#">See More</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="full">
            <img className="img-responsive" src="images/img7.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section layout_padding padding_bottom-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="heading_main text_align_center">
              <h2><span>News</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="full blog_img_popular">
                      <img className="img-responsive" src="images/img9.png" alt="#" />
                      <h4>Technology</h4>
                      <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="full blog_img_popular">
                      <img className="img-responsive" src="images/img8.png" alt="#" />
                      <h4>Education</h4>
                      <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="full blog_img_popular">
                      <img className="img-responsive" src="images/img9.png" alt="#" />
                      <h4>Technology</h4>
                      <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="full blog_img_popular">
                      <img className="img-responsive" src="images/img8.png" alt="#" />
                      <h4>Education</h4>
                      <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </div>			  
    </div>
  </div>
  <div className="section layout_padding padding_bottom-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="heading_main text_align_center">
              <h2><span>Contact</span></h2>
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
                  <input type="text" placeholder="Your Name" name="your name" />
                </div>
                <div className="full field">
                  <input type="email" placeholder="Email Address" name="Email" />
                </div>
                <div className="full field">
                  <input type="phn" placeholder="Phone Number" name="Phone number" />
                </div>
                <div className="full field">
                  <textarea placeholder="Massage" defaultValue={""} />
                </div>
                <div className="full field">
                  <div className="center"><button>Send</button></div>
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

export default Home;