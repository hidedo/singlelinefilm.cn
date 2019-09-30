import React , { Component } from "react";
import '../css/About.css';



class About extends Component{


    componentDidMount() {
        this.props.callParent({loading:false,homeIn:false})
        document.getElementsByTagName('title')[0].text='Singleline Film | About'
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

                        <div><img width='' src="/image/logo/MG.jpg" alt=""/>MG</div>

                        <div><img width='' src="/image/logo/boucheron.png" alt=""/>boucheron</div>

                        <div><img width='' src="/image/logo/chery.jpg" alt=""/>chery</div>
                        <div><img width='' src="/image/logo/dumex.jpg" alt=""/>dumex</div>
                        <div><img width='' src="/image/logo/gatorade.jpg" alt=""/>gatorade</div>
                        <div><img width='' src="/image/logo/lancome.png" alt=""/>lancome</div>
                        <div><img width='' src="/image/logo/skoda.jpg" alt=""/>skoda</div>
                        <div><img width='' src="/image/logo/pepsi.png" alt=""/>pepsi</div>
                        <div><img width='' src="/image/logo/philips.jpg" alt=""/>philips</div>
                        <div><img width='' src="/image/logo/chevrolet.jpg" alt=""/>chevrolet</div>
                        <div><img width='' src="/image/logo/princess.jpg" alt=""/>princess cruises</div>



                    </div>





                </div>
            </div>


        )
    }

}

export default About;