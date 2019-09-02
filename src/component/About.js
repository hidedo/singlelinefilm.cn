import React , { Component } from "react";
import '../css/About.css';



class About extends Component{


    componentWillMount() {
        this.props.callParent({loading:false})
    }

    render() {
        return(
            <div className={'about-wrapper fadeIn animated'}>

                <div className={'text'}>
                    <h1 >About</h1>
                    <br/>
                    <br/>
                    <p className={'word'}>
                        We are a boutique film production and service company based in Los Angeles and New York. Our work has been featured around the world, from theaters across America, to moving billboards in China, to Cannes, Sundance, Tribeca, and Toronto film festivals. We make feature-length films, commercial/brand films, episodics, music videos, virtual reality, and shorts. While we have collaborated with many here at home, we have worked with even more abroad. Our objective is to commit to our clients and passion projects alike with the same creative drive and dedication to craft.


                    </p>



                </div>

                <div className={'client'}>
                    <h1>Client</h1>
                    <br/>
                    <br/>
                    <div className={'logos'}>

                        <div><img width='80' src="/image/logo/logo-adidas.jpg" alt=""/>adidas</div>

                        <div><img width='80' src="/image/logo/logo-att.jpg" alt=""/>att</div>

                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-mercedes.jpg" alt=""/>mercedes</div>
                        <div><img width='80' src="/image/logo/logo-adidas.jpg" alt=""/>adidas</div>

                        <div><img width='80' src="/image/logo/logo-att.jpg" alt=""/>att</div>
                    </div>





                </div>
            </div>


        )
    }

}

export default About;