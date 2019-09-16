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
        source:['1.mp4','2.mp4'],
        des:[{
            director:'huang tommy',
            producer:'tommso, sisi',
            actor:'tom cruse, huihui, rachel, rose',
            other:'',
        },{
            director:'tomas',
            producer:'jening cheng',
            actor:'wang yuan',
            other:'li hui',

        },
            // {
            //     director:'bob miler',
            //     producer:'jening cheng',
            //     actor:'sisi best',
            //     other:'miu miu',
            //
            // }
            ],

        hover:null
    }

    handleLoad(value) {

        const videoElement = this.refs.preload.querySelectorAll('video')[value];

        videoElement.addEventListener('canplay',()=>{
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
    render() {

        return(
            <div>
                <div ref='preload' className={'preload'}>
                    <video onLoadStart={this.handleLoad.bind(this, 0)} src="/video/1.mp4" />
                    <video onLoadStart={this.handleLoad.bind(this, 1)} src="/video/2.mp4" />

                </div>
                {this.state.workPlay?<WorkPlay index={this.state.index} callParent={this.onChildChange.bind(this)}
                                               source={this.state.source}
                                               des={this.state.des}
                                               />
                                               :
                    <div className={'work-container fadeIn animated'}>
                    <div key='0' className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} data-category={'Brand'}
                         onClick={this.playOn.bind(this,0)}
                         onMouseEnter={this.mouseEnter.bind(this,0)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/1.jpg')",'opacity':`${this.state.hover==0 || this.state.hover==null?1:0.5}`}}>

                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>

                        <span>directed by tomas, produced by jenine cheng brand</span>
                    </div>
                    <div  className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`}
                          onMouseEnter={this.mouseEnter.bind(this,1)}
                          onMouseLeave={this.mouseLeave.bind(this)}
                         onClick={this.playOn.bind(this,1)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/2.jpg')",'opacity':`${this.state.hover==1 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='TV'||this.props.category=='All'?'':'work-box-fade'}`}
                         onMouseEnter={this.mouseEnter.bind(this,2)}
                         onMouseLeave={this.mouseLeave.bind(this)}
                         data-category={'TV'} onClick={this.playOn.bind(this,0)}>
                        <LazyLoad>

                            <div className={'work-img-box isVideo'} style={{'opacity':`${this.state.hover==2|| this.state.hover==null?1:0.5}`}}>
                                <video width='100%' autoPlay="autoplay" loop="loop" src="/video/1.mp4"></video>
                                  

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng, tv</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='TV'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,1)}
                         onMouseEnter={this.mouseEnter.bind(this,3)}
                         onMouseLeave={this.mouseLeave.bind(this)}>

                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/4.jpg')",'opacity':`${this.state.hover==3 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Other'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,1)}
                         onMouseEnter={this.mouseEnter.bind(this,4)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box isVideo'} style={{'opacity':`${this.state.hover==4|| this.state.hover==null?1:0.5}`}}>

                            <video  width='100%' autoPlay="autoplay" loop="loop" src="/video/2.mp4"></video>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Other'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,0)}
                         onMouseEnter={this.mouseEnter.bind(this,5)}
                         onMouseLeave={this.mouseLeave.bind(this)}>

                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/2.jpg')",'opacity':`${this.state.hover==5 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='Brand'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,1)}
                         onMouseEnter={this.mouseEnter.bind(this,6)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div  className={'work-img-box'} style={{'backgroundImage':"url('/image/3.jpg')",'opacity':`${this.state.hover==6 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='TV'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,1)}
                         onMouseEnter={this.mouseEnter.bind(this,7)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/4.jpg')",'opacity':`${this.state.hover==7 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                    <div className={`filler work-box ${this.props.category=='TV'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,1)}
                         onMouseEnter={this.mouseEnter.bind(this,8)}
                         onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/1.jpg')",'opacity':`${this.state.hover==8 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>
                        <div className={`filler work-box ${this.props.category=='Other'||this.props.category=='All'?'':'work-box-fade'}`} onClick={this.playOn.bind(this,1)}
                             onMouseEnter={this.mouseEnter.bind(this,9)}
                             onMouseLeave={this.mouseLeave.bind(this)}>
                        <LazyLoad><div className={'work-img-box'} style={{'backgroundImage':"url('/image/2.jpg')",'opacity':`${this.state.hover==9 || this.state.hover==null?1:0.5}`}}>
                            <img width={''} src="/image/icon-play.svg" alt=""/>

                        </div></LazyLoad>
                        <span>directed by tomas, produced by jenine cheng</span>
                    </div>


                </div>}


            </div>

        )
    }

}

export default Work;