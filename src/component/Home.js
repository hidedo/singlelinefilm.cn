import React, {Component} from "react";
import '../css/Home.css';


import {NavLink} from 'react-router-dom';


class Home extends Component {
    picNumber =3;//images for slide
    preImages=4;//images for loading
    n=1;//couter
    arr=[];//container of loaded images


    state = {

        videoShow: false,

        isPlay: false,
        isMenuOpen: false,
        mouseEnter: false,
        innerWidth:window.innerWidth,
        navHover:false,


    };


    componentWillUnmount() {
        clearInterval(this.timer)


    }



    slide(){
        const container = this.refs.container;


        if (this.n == 3) {
            // const e = document.createEvent('MouseEvents');
            // e.initMouseEvent('mousedown1', true, true)
            // document.querySelector(".right").dispatchEvent(e)
            container.classList.remove('move')
            container.style.left=0 //reposition to the first pic

            this.n=0;
        }


        else {


            container.classList.add('move')
            let distance = -(this.n + 1) * this.state.innerWidth;
            container.style.left = `${distance}px`

            this.n++
        }

    }
componentDidMount() {
        window.onresize = ()=>{
            this.setState(
                {innerWidth:window.innerWidth})
        }
        this.refs.container.onmousewheel=(e)=>{
            e.stopPropagation();
            e.preventDefault();
        }
    this.refs.play.onmousewheel=(e)=>{
            e.stopPropagation();
            e.preventDefault();
    }




}
    componentWillUnmount()

    {
        clearInterval(this.timer)

    }


    handleLoad(value) {

        const imgElement = this.refs.preload.querySelectorAll('img')[value];


        if (imgElement.complete) {
            this.arr.push(true);
            console.log(this.arr, value)

        }

        if (this.arr.length == this.preImages) {
            this.props.callParent({loading:false,homeIn:true});
            this.timer = setInterval(this.slide.bind(this),4000)
            console.info('all images loaded ')

        } else if (this.arr.length !== this.preImages && this.arr.length !== 0) {
            console.info('some images failed')
        }


    }



    mouseDownRight(){
        clearInterval(this.timer)


        if(this.n==3){
            this.refs.container.classList.remove('move')
            this.refs.container.style.left=0 //reposition to the first pic

            this.n=0;
        }


    }
    mouseUpRight(){
        this.timer = setInterval(this.slide.bind(this), 4000)
        this.refs.container.classList.add('move')
        let distance = -(this.n+1)*this.state.innerWidth;
        this.refs.container.style.left=`${distance}px`

        this.n++



    }



    mouseDownLeft(){
        clearInterval(this.timer)
        if(this.n==0){
            this.n=this.picNumber;
            this.refs.container.classList.remove('move')
            this.refs.container.style.left=`${-this.n*this.state.innerWidth}px` //reposition to the last pic


        }


    }
    mouseUpLeft(){
        this.timer = setInterval(this.slide.bind(this), 4000)
        this.refs.container.classList.add('move')
        let distance = -(this.n-1)*this.state.innerWidth;
        this.refs.container.style.left=`${distance}px`

        this.n--



    }

    play() {

        clearInterval(this.timer)
        this.setState({
            videoShow: !this.state.videoShow,
            isPlay: !this.state.isPlay,
        });
        const video = document.querySelectorAll('.video');
        for (let i of video) {
            i.style.display = 'inline'
        }


        this.refs[`myVideo${this.n}`].play();


    }

    close() {
        this.timer = setInterval(this.slide.bind(this), 4000);
        this.setState({
            videoShow: !this.state.videoShow,
            isPlay: !this.state.isPlay,
        });

        this.refs.myVideo1.pause();


    }

    clickMenu() {

        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });

        this.refs.menu.style.visibility = 'visible'


    }

    mouseEnter() {

        clearInterval(this.timer)
        this.setState({mouseEnter: true})

    }

    mouseLeave() {
        if(!this.state.isPlay){
            this.timer = setInterval(this.slide.bind(this), 4000);
        }

        this.setState({mouseEnter: false})

    }
    mouseEnter2() {

        this.setState({navHover: true})

    }

    mouseLeave2() {

        this.setState({navHover: false})

    }

    render() {
        let boolean = (this.state.isPlay) || (this.state.isMenuOpen);
        return (

            <div>
                <div ref='preload' className={'preload'}>
                    <img onLoad={this.handleLoad.bind(this, 0)} src="/image/2.jpg" alt=""/>
                    <img onLoad={this.handleLoad.bind(this, 1)} src="/image/3.jpg" alt=""/>
                    <img onLoad={this.handleLoad.bind(this, 2)} src="/image/4.jpg" alt=""/>
                    <img onLoad={this.handleLoad.bind(this, 3)} src="/image/5.jpg" alt=""/>
                </div>
                <div ref={'menu'}

                     className={`menu animated  ${this.state.isMenuOpen ? 'slideInDown' : 'slideOutUp'}`}>

                    <ul>
                        <NavLink to={'/'} exact={true}>
                            <li onClick={this.clickMenu.bind(this)}><h3>HOME</h3></li>
                        </NavLink>
                        <NavLink to={'/work/'}>
                            <li><h3>WORK</h3></li>
                        </NavLink>

                        <NavLink to={'/about/'}>
                            <li><h3>ABOUT</h3></li>
                        </NavLink>

                        <NavLink to={'/contact/'}>
                            <li><h3>CONTACT</h3></li>
                        </NavLink>


                    </ul>
                    <footer className={'footer'}>
                        <small><a href="mailto:info@meridian.LA">©2019 MERIDIAN CONTENT, LLC</a></small>
                    </footer>


                </div>


                <div ref={'play'} className={'play'} onMouseEnter={this.mouseEnter.bind(this)}
                     onMouseLeave={this.mouseLeave.bind(this)}

                     style={{
                         'display': this.state.videoShow ? 'none' : 'block',
                         'opacity': this.state.mouseEnter ? 1 : 0
                     }} onClick={this.play.bind(this)}>
                    <img src="/image/icon-play.svg"/>
                </div>
                <div className={'left'} style={{'display': !boolean ? 'block' : 'none'}}
                     onMouseDown={this.mouseDownLeft.bind(this)}
                     onMouseUp={this.mouseUpLeft.bind(this)}>
                    <i className={'icon-left-open-big'}></i>
                </div>
                <div className={'right'} style={{'display': !boolean ? 'block' : 'none'}}
                     onMouseDown={this.mouseDownRight.bind(this)}
                     onMouseUp={this.mouseUpRight.bind(this)}>
                    <i className={'icon-right-open-big'}></i>
                </div>
                {/*<div className={'logo'}>*/}
                {/*        logo*/}
                {/*</div>*/}

                <div className={'close fadeIn animated'} style={{'display': !this.state.isPlay ? 'none' : 'block'}}
                     onClick={this.close.bind(this)}
                     onMouseEnter={this.mouseEnter2.bind(this)}
                     onMouseLeave={this.mouseLeave2.bind(this)}>
                    <span className={'menu-span span3'}
                          style={{'backgroundColor':this.state.navHover?'darkgray':''}}
                         ></span>
                    <span className={'menu-span span4'}
                          style={{'backgroundColor':this.state.navHover?'darkgray':''}}
                          ></span>
                </div>
                <div className={'nav-button fadeIn animated'} style={{'display': !this.state.isPlay ? 'block' : 'none'}}
                     onClick={this.clickMenu.bind(this)}
                     onMouseEnter={this.mouseEnter2.bind(this)}
                     onMouseLeave={this.mouseLeave2.bind(this)}>

                    <span className={`menu-span ${this.state.isMenuOpen?'span1':''}`}
                          style={{'backgroundColor':this.state.navHover?'darkgray':''}}></span>
                    <span className={`menu-span ${this.state.isMenuOpen?'span2':''}`}
                          style={{'backgroundColor':this.state.navHover ?'darkgray':''}}
                          ></span>
                </div>


                <div ref={'container'} className={'container fadeIn animated'}
                     style={{'left': `${-this.state.innerWidth}px`}}
                >


                    <div className={`img-box`} style={{'backgroundImage': 'url(/image/3.jpg)'}}>
                   <span className={'intro'} style={{'opacity': this.state.mouseEnter ? 0 : 1}}>
                       <h1>Directed By: alacata</h1>
                         <h2>when you see me, I see you</h2>
                    </span>


                        <video ref={'myVideo0'}
                               className={`video animated  ${this.state.isPlay ? 'fadeIn' : 'fadeOut'}`}

                               width={'80%'} controls="controls"
                               src="/video/2.mp4">

                        </video>
                    </div>
                    <div className={`img-box`} style={{'backgroundImage': 'url(/image/1.jpg)'}}>
                    <span className={'intro'} style={{'opacity': this.state.mouseEnter ? 0 : 1}}>
                         <h1>Directed By: Marco Presti</h1>

                    <h2>Asahi “Enter Asahi”</h2>
                    </span>


                        <video ref={'myVideo1'}
                               className={`video animated  ${this.state.isPlay ? 'fadeIn' : 'fadeOut'}`}

                               width={'80%'}  controls="controls"
                               src="/video/1.mp4">

                        </video>


                    </div>
                    <div className={`img-box`} style={{'backgroundImage': 'url(/image/2.jpg)'}}>
                    <span className={'intro'} style={{'opacity': this.state.mouseEnter ? 0 : 1}}>
                        <h1>Directed By: TOMASSO</h1>
                         <h2>LI HUI fantastic</h2>
                    </span>


                        <video ref={'myVideo2'}
                               className={`video animated  ${this.state.isPlay ? 'fadeIn' : 'fadeOut'}`}

                               width={'80%'}  controls="controls"
                               src="/video/2.mp4">

                        </video>

                    </div>
                    <div className={`img-box`} style={{'backgroundImage': 'url(/image/3.jpg)'}}>
                   <span className={'intro'} style={{'opacity': this.state.mouseEnter ? 0 : 1}}>
                        <h1>Directed By: alacata</h1>
                         <h2>when you see me, I see you</h2>
                    </span>


                        <video ref={'myVideo3'}
                               className={`video animated  ${this.state.isPlay ? 'fadeIn' : 'fadeOut'}`}

                               width={'80%'}  controls="controls"
                               src="/video/1.mp4">

                        </video>
                    </div>
                </div>
            </div>


        )

    }
}

export default Home;