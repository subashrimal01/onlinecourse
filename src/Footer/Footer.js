import { Component } from "react";

class Footer extends Component{
    render(){
        return(
          <div>
  <footer className="footer-box">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div className="footer_blog">
            <div className="full margin-bottom_30">
              <img src="images/footer_logo.png" alt="#" />
            </div>
            <div className="full white_fonts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div className="footer_blog footer_menu white_fonts">
            <h3>Quick links</h3>
            <ul> 
              <li><a href="#">&gt; Join Us</a></li>
              <li><a href="#">&gt; Maintenance</a></li>
              <li><a href="#">&gt; Language Packs</a></li>
              <li><a href="#">&gt; LearnPress</a></li>
              <li><a href="#">&gt; Release Status</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div className="footer_blog full white_fonts">
            <h3>Newsletter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <div className="newsletter_form">
              <form action="index.html">
                <input type="email" placeholder="Your Email" name="#" required />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>	 
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div className="footer_blog full white_fonts">
            <h3>Contact us</h3>
            <ul className="full">
              <li><img src="images/i5.png" /><span>London 145<br />United Kingdom</span></li>
              <li><img src="images/i6.png" /><span>demo@gmail.com</span></li>
              <li><img src="images/i7.png" /><span>+12586954775</span></li>
            </ul>
          </div>
        </div>	 
      </div>
    </div>
  </footer>
  {/* End Footer */}
  <div className="footer_bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="crp">© Copyrights 2019 design by html.design</p>
        </div>
      </div>
    </div>
  </div>
  <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up" /></a>
</div>

        )
    }
}

export default Footer;