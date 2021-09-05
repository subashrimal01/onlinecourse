import { Component } from "react";
import {Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CourseInsert from "./CourseInsert";
import Courses from "./Courses";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ShowCourse from "./ShowCourse";

class Mid extends Component{
    render(){
        return(
            <>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component = {Login}></Route>
            <Route path="/register" component = {Register}></Route>
            <Route path="/aboutus" component = {AboutUs}></Route>
            <Route path = "/contactus" component ={ContactUs}></Route>
            <Route path = "/courses" component = {ShowCourse}></Route>
            <Route path="/dashboard" component={CourseInsert}></Route>
            </>
        )
    }
}
export default Mid;