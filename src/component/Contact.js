import React , { Component } from "react";
import '../css/Contact.css';



class About extends Component {
    componentWillMount() {
        this.props.callParent({loading:false})
    }

    render() {
        return (
            <div className={'contact-wrapper fadeIn animated'}>
                <div className={'contact-content'}>
                    <h1>Contact</h1>
                    <br/>
                    <br/>
                    <p className={'address'}>
                        590 Tahoe Keys Blvd
                        <br/>
                        South Lake Tahoe, CA 96150
                        <br/>
                        United States
                        <br/>
                        <br/>

                        Mon – Sun, 7a – 10p
                        <br/>

                        <strong>T:</strong> +1 530 555 1234
                        <br/>
                        <strong>E:</strong> <a href="mailto:info@meridian.LA">placeholder@example.com</a>

                    </p>



                </div>
                <div className={'contact-map'}>
                    <iframe
                        src="map.html"
                        width="100%" height="100%" frameBorder="0" style={{"border":0, "allowFullScreen":""}}>

                    </iframe>
                </div>

            </div>
        )
    }

}

export default About;