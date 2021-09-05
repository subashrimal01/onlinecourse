import { Component } from "react";

class ContactUs extends Component{
    render(){
        return(
            <div className="section layout_padding padding_bottom-0">
                <section className="inner_banner">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="full">
                            <h3>Contact us</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <div className="section layout_padding contact_section" style={{background: '#f6f6f6'}}>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="full float-right_img">
                            <img src="images/img10.png" alt="#" />
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
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

export default ContactUs;