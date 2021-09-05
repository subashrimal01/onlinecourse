import { Component } from "react";

class Courses extends Component{
    render(){
        return(
            <div>
            <div className="section layout_padding">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="full">
                        <div className="heading_main text_align_center">
                        <h2><span>Our </span>Courses</h2>
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

export default Courses;