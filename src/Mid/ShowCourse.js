import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import Courses from "./Courses";


class ShowCourse extends Component{
    state = {
        myproducts : [],
        con : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
    }



componentDidMount(){
    axios.get("http://localhost:90/course/show", this.state.con)
    .then((res)=>{
        this.setState({
            myproducts : res.data
        })
        console.log(res.data)
    })
    .catch((err)=>{
        // error area
    })
}

// delete product funtion
deleteProduct=(pro_idd)=>{
    axios.delete("http://localhost:90/course/delete/"+pro_idd)
    .then()
    .catch()
    //alert(pro_idd)
}

    render(){
        return(
            <div class="section layout_padding padding_bottom-0">
                <div class="container">
                <div class="row">
                <div class="col-lg-12">
                <div className="full">
                        <div className="heading_main text_align_center">
                        <h2><span>Our </span>Courses</h2>
                        </div>
                    </div>
                <div id="demo" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="row">
                  {
                    this.state.myproducts.map(Courses=>{
                        return(  
                        
                            <div class="col-lg-6 col-md-6 col-sm-12">
								<div class="full blog_img_popular">
                                    <img class="img-responsive" src="images/img9.png" alt="#" />
									<h4>{Courses.courseTitle}</h4>
								</div>
                            </div>
                            
                        )
                    }
                    )
                }
                </div>
                </div>

                <div class="carousel-item">
                <div class="row">
                  {
                    this.state.myproducts.map(Courses=>{
                        return(  
                        
                            <div class="col-lg-6 col-md-6 col-sm-12">
								<div class="full blog_img_popular">
                                    <img class="img-responsive" src="images/img9.png" alt="#" />
									<h4>{Courses.courseTitle}</h4>
								</div>
                            </div>
                            
                        )
                    }
                    )
                }
                </div>
                </div>



        
        </div>

        <NavLink class="carousel-control-prev" to="/courses" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </NavLink>
                        <NavLink class="carousel-control-next" to="/courses" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </NavLink>
        </div>
        </div>
        </div>                                
        </div>
        </div>
        )}
}

export default ShowCourse;