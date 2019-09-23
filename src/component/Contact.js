import React , { Component } from "react";
import '../css/Contact.css';



class About extends Component {
    componentDidMount() {
        this.props.callParent({loading:false,homeIn:false})
    }

    render() {
        return (
            <div className={'contact-wrapper fadeIn animated'}>
                <div className={'contact-content'}>
                    <h1>Contact</h1>
                    <br/>
                    <br/>
                    <p className={'address'}>
                        上海市安福路211号

                        <br/>

                        <strong>T:</strong> 021-54652723
                        <br/>
                        <strong>E:</strong> <a href="mailto:Janinecheng.sh@gmail.com">Janinecheng.sh@gmail.com</a>
                        <br/>
                        <br/>

                        <small>© 2019 singlelinefilm.cn, all rights reserved</small>


                    </p>



                </div>
                <div className={'contact-map'}>
                    <iframe
                        src="map.html"
                        width="100%" height="100%" frameBorder="0" style={{"border":0, "allowFullScreen":"true"}}>

                    </iframe>
                </div>

            </div>
        )
    }

}

export default About;