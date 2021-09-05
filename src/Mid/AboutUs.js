import { Component } from "react";

class AboutUs extends Component{
    render(){
        return(

<div className="section layout_padding padding_bottom-0">
<section class="inner_banner">
	  <div class="container">
	      <div class="row">
		      <div class="col-12">
			     <div class="full">
				     <h3>About us</h3>
				 </div>
			  </div>
		  </div>
	  </div>
	</section>

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
  </div>

        )
    }
}

export default AboutUs;