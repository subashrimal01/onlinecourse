import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";

class CourseInsert extends Component{
    state = {
        courseTitle : '',
        courseContent: '',
        courseType: '',
        coursePrice: '',
        courseAuthor: '',
        filename : null
    }
    textChangeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    changeFileHandler=(e)=>{
        this.setState({
            filename : e.target.files[0]
        })
    }

    sendData = (e)=>{
        e.preventDefault();
        const data =  new FormData();

        data.append('courseTitle', this.state.courseTitle)
        data.append('courseContent', this.state.courseContent)
        data.append('courseType', this.state.courseType)
        data.append('coursePrice', this.state.coursePrice)
        data.append('courseAuthor', this.state.courseAuthor)
      //  data.append('title', this.state.title)
        data.append('course_image', this.state.filename)
        axios.post("http://localhost:90/course/insert", data)
        .then((result)=>{
            console.log(result)
        })
        .catch()
        window.location.href="/courses"
    }
    render(){
        return(

            
            <div class="main">
<div className="section layout_padding padding_bottom-0">
                <section className="inner_banner">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="full">
                            <h3>Add Course</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>

<div className="section layout_padding contact_section" style={{background: '#f6f6f6'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="contact_form">
                            <form action="contact.html">
                            <fieldset>
                                <div className="full field">
                                <input type="text" name="courseTitle" placeholder="Course Title"
                                value={this.state.courseTitle} onChange={this.textChangeHandler}/>                                </div>
                                <div className="full field">
                                <input type="text" name="courseContent" placeholder="Course Content"
                                value={this.state.courseContent} onChange={this.textChangeHandler}/>                                </div>
                                <div className="full field">
                                <input type="text" name="courseType" placeholder="Course Type"
                                value={this.state.courseType} onChange={this.textChangeHandler}/>                                </div>
                                <div className="full field">
                                <input type="text" name="coursePrice" placeholder="Course Price"
                                value={this.state.coursePrice} onChange={this.textChangeHandler}/>                                </div>
                                <div className="full field">
                                <input type="text" name="courseAuthor" placeholder="Course Author"
                                value={this.state.courseAuthor} onChange={this.textChangeHandler}/>                                </div>
                                <div className="full field">
                                <input type="file" name="filename"
                                onChange={this.changeFileHandler}/></div>
                                <div className="full field">
                                <div className="center"><button onClick={this.sendData}>Add</button></div>
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

export default CourseInsert;