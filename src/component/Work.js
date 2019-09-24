import React , { Component } from "react";
import '../css/Work.css';
import WorkPlay from "./WorkPlay";
import LazyLoad from 'react-lazy-load'


class Work extends Component{
    preVideos = 2;//videos for loading
    arr=[];//container of loaded videos
    state={
        index:0,
        workPlay:false,
        source:['MG.mp4','Skoda_IntoTheSun_60s_B_Generic.mp4','BOU_ZDY_15sec_FINAL.mp4','60s_Princess_Cruises_Music_Only.mp4','BOU_LYJ_15sec_V8_Final.mp4'
        ,'DUMEX30_0507.mp4','philips.mp4','wdl.mp4','gatorade.mp4','malibu_liangchaowei.mp4','malibu_hejian.mp4',
        'malibu_kira.mp4','malibu_luozhengyu.mp4','malibu_showjoy.mp4','malibu_tianyuan.mp4','malibu_wangmaomao.mp4',
        'chery_fatherhood.mp4','chery_the_engineer.mp4'],
        des:[{
            id:0,
            director:'huang tommy',
            producer:'tommso, sisi',
            actor:'tom cruse, huihui, rachel, rose',
            other:'',
        },{
            id:1,
            director:'tomas',
            producer:'jening cheng',
            actor:'wang yuan',
            other:'li hui',

        },
            {
                id:2,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:3,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:4,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:5,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:6,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:7,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:8,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:9,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:10,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:11,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:12,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:13,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:14,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:15,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:16,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            },
            {
                id:17,
                director:'bob miler',
                producer:'jening cheng',
                actor:'sisi best',
                other:'miu miu',

            }
            ],

        hover:null
    }

    handleLoad(value) {

        const videoElement = this.refs.preload.querySelectorAll('video')[value];

        videoElement.addEventListener('canplaythrough',()=>{
                this.arr.push(true);
                console.log(this.arr, value)
            if (this.arr.length == this.preVideos) {

                this.props.callParent({subNav:true,loading:false,homeIn:false});


                console.info('all videos can play ')

            } else if (this.arr.length !== this.preVideos && this.arr.length !== 0) {
                console.info('some videos failed')
            }
                },false)




    }

onChildChange({workPlay,subNav}){
        this.setState({workPlay:workPlay});
        this.props.callParent({subNav:subNav})

}

    playOn(value){
        this.setState({workPlay:true});
        this.setState({index:value})
        this.props.callParent({subNav:false});
}
    mouseEnter(value){

     this.setState({hover:value})
    }
    mouseLeave(){
        this.setState({hover:null})

    }

    componentWillUnmount()
     {
        this.props.callParent({subNav:false,loading:true,homeIn: false})
    }
    componentWillMount()
    {
        this.props.callParent({loading:true,homeIn:false,subNav:false})

    }
    componentDidMount() {
        document.getElementsByTagName('title')[0].text='Singleline Film | Work'
    }

    render() {

        return(
            <div>
                <div ref='preload' className={'preload'}>
                    <video onLoadStart={this.handleLoad.bind(this, 0)} src="/video/BOU_ZDY_15sec_FINAL.mp4" />
                    <video onLoadStart={this.handleLoad.bind(this, 1)} src="/video/BOU_LYJ_15sec_V8_Final.mp4" />

                </div>
                {this.state.workPlay?<WorkPlay index={this.state.index} callParent={this.onChildChange.bind(this)}
                                               source={this.state.source}
                                               des={this.state.des}
                                               />
                                               :
                    <div className={'work-container fadeIn animated'}>
                    <div  className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`}
                         onClick={this.playOn.bind(this,0)}
                         onMouseEnter={this.mouseEnter.bind(this,0)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/MG_Moment.jpg')",'opacity':`${this.state.hover==0 || this.state.hover==null?1:0.2}`}}>

                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>

                        <span>MG: Take In</span>
                    </div>
                    <div  className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`}
                          onMouseEnter={this.mouseEnter.bind(this,1)}
                          onMouseLeave={this.mouseLeave.bind(this)}
                          onClick={this.playOn.bind(this,1)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/Skoda_IntoTheSun_60s_B_Generic_Moment.jpg')",'opacity':`${this.state.hover==1 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>Skoda: Into The Sun</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`}
                         onMouseEnter={this.mouseEnter.bind(this,2)}
                         onMouseLeave={this.mouseLeave.bind(this)}
                         onClick={this.playOn.bind(this,2)}>
                        <LazyLoad>

                            <div className={'work-img-box isVideo'} style={{'opacity':`${this.state.hover==2|| this.state.hover==null?1:0.2}`}}>
                                <video width='100%' autoPlay="autoplay" muted={true} loop="loop" src="/video/BOU_ZDY_15sec_FINAL.mp4"></video>
                                  

                        </div></LazyLoad>
                        <span>Boucheron: Deliver Love</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,3)}
                         onMouseEnter={this.mouseEnter.bind(this,3)}
                         onMouseLeave={this.mouseLeave.bind(this)}>

                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/60s_Princess_Cruises_Music_Only_Moment.jpg')",'opacity':`${this.state.hover==3 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>Princess Cruises</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,4)}
                         onMouseEnter={this.mouseEnter.bind(this,4)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box isVideo'} style={{'opacity':`${this.state.hover==4|| this.state.hover==null?1:0.2}`}}>

                            <video  width='100%' autoPlay="autoplay" loop="loop" muted={true} src="/video/BOU_LYJ_15sec_V8_Final.mp4"></video>

                        </div></LazyLoad>
                        <span>Boucheron: Deliver Love</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,5)}
                         onMouseEnter={this.mouseEnter.bind(this,5)}
                         onMouseLeave={this.mouseLeave.bind(this)}>

                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/DUMEX30_0507_Moment.jpg')",'opacity':`${this.state.hover==5 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>Dumex</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,6)}
                         onMouseEnter={this.mouseEnter.bind(this,6)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div  className={'work-img-box'} style={{'backgroundImage':"url('/image/philips.jpg')",'opacity':`${this.state.hover==6 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>philips</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,7)}
                         onMouseEnter={this.mouseEnter.bind(this,7)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/wdl.jpg')",'opacity':`${this.state.hover==7 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>Pepsi：维动力</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,8)}
                         onMouseEnter={this.mouseEnter.bind(this,8)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/gatorade.jpg')",'opacity':`${this.state.hover==8 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>Gatorade: Win from Within</span>
                    </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,9)}
                             onMouseEnter={this.mouseEnter.bind(this,9)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_liangchaowei.jpg')",'opacity':`${this.state.hover==9 || this.state.hover==null?1:0.2}`}}>
                            <img  src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>Chverolet: Malibu travels</span>
                    </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,10)}
                             onMouseEnter={this.mouseEnter.bind(this,10)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_hejian.jpg')",'opacity':`${this.state.hover==10 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chverolet: Malibu travels</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,11)}
                             onMouseEnter={this.mouseEnter.bind(this,11)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_kira.jpg')",'opacity':`${this.state.hover==11 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chverolet: Malibu travels</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,12)}
                             onMouseEnter={this.mouseEnter.bind(this,12)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_luozhengyu.jpg')",'opacity':`${this.state.hover==12 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chverolet: Malibu travels</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,13)}
                             onMouseEnter={this.mouseEnter.bind(this,13)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_showjoy.jpg')",'opacity':`${this.state.hover==13 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chverolet: Malibu travels</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,14)}
                             onMouseEnter={this.mouseEnter.bind(this,14)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_tianyuan.jpg')",'opacity':`${this.state.hover==14 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chverolet: Malibu travels</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,15)}
                             onMouseEnter={this.mouseEnter.bind(this,15)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/malibu_wangmaomao.jpg')",'opacity':`${this.state.hover==15 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chverolet: Malibu travels</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,16)}
                             onMouseEnter={this.mouseEnter.bind(this,16)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/chery_fatherhood.jpg')",'opacity':`${this.state.hover==16 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chery: Fatherhood</span>
                        </div>
                        <div className={`filler work-box ${this.props.category=='Story'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,17)}
                             onMouseEnter={this.mouseEnter.bind(this,17)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                            <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/chery_the_engineer.jpg')",'opacity':`${this.state.hover==17 || this.state.hover==null?1:0.2}`}}>
                                <img  src="/image/icon-play.svg" alt=""/>

                            </div></LazyLoad>
                            <span>Chery: The engineer</span>
                        </div>


                </div>}


            </div>

        )
    }

}

export default Work;