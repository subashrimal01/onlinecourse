import { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component{

    logOut=(e)=>{
      localStorage.clear()
      window.location.href="/login"
    }

    render(){

        if (localStorage.getItem('token')){
          var menu = <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
          <ul className="navbar-nav">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><NavLink className="nav-link" to="/aboutus">About</NavLink></li>
            <li><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
            <li><NavLink className="nav-link" to="/contactus">Contact us</NavLink></li>
            <li><NavLink className="nav-link" to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink className="nav-link" to="/logout" onClick={this.logOut}>Logout</NavLink></li>
          </ul>
        </div>
        }
        else{
          var menu = <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
          <ul className="navbar-nav">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><NavLink className="nav-link" to="/aboutus">About</NavLink></li>
            <li><NavLink className="nav-link" to="/courses">Courses</NavLink></li>
            <li><NavLink className="nav-link" to="/contactus">Contact us</NavLink></li>
            <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
            
          </ul>
        </div>
        }

        return(
            <header className="top-header">
  <nav className="navbar header-nav navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" ><img src="images/logo.png" alt="image" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>


      {menu}


      


      <div className="search-box">
        <input type="text" className="search-txt" placeholder="Search"/>
        <a className="search-btn">
          <img src="images/search_icon.png" alt="#" />
        </a>
      </div>
    </div>
  </nav>
</header>

        )
    }
}

export default Header;