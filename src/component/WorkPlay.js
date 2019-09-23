import React , { Component } from "react";
import '../css/WorkPlay.css';


class Work extends Component{
    state={
        index:Number(this.props.index),

    }

    close(){

        this.refs.playContent.classList.remove('slideInLeft');
        this.refs.playContent.classList.add('slideOutLeft');
        this.refs.playDes.classList.remove('slideInRight');
        this.refs.playDes.classList.add('slideOutRight');
        this.refs.playContent.addEventListener('webkitAnimationEnd',()=>this.props.callParent({workPlay:false,subNav:true}),false);
    }
    playNext(){
        let length = this.props.source.length;
        if (this.state.index == length-1){
            this.setState({index:0})
        }
        else{
            this.setState({index:this.state.index+1})
        }
        this.refs.des.classList.add('fadeIn','animated');
        this.refs.des.addEventListener('webkitAnimationEnd',()=>this.refs.des.classList.remove('fadeIn'),false)

    }
    playPrevious(){
        let length = this.props.source.length;
        if(this.state.index == 0){
            this.setState({index:length-1})
        }
        else{
            this.setState({index:this.state.index-1})

        }
        this.refs.des.classList.add('fadeIn','animated');
        this.refs.des.addEventListener('webkitAnimationEnd',()=>this.refs.des.classList.remove('fadeIn'),false)

    }



    render() {
        let {director,producer,actor,other} = this.props.des[this.state.index]

        return(
            <div className={'play-container'}>

                <div ref={'playContent'} className={`play-content slideInLeft animated`}>
                    <video  width={'100%'} controls="controls" preload={'auto'}
                           src={`/video/${this.props.source[this.state.index]}`}></video>
                </div >
                <div ref={'playDes'} className={`play-des slideInRight  animated`}>
                    <span ref={'des'}>
                        Director: {director}
                        <br/>
                        Producer: {producer}
                        <br/>
                        Actor: {actor}
                        <br/>
                        Other: {other}
                    </span>
                    <div className={'play-bar'}>
                        <i className={'fa fa-step-backward'} onClick={this.playPrevious.bind(this)}></i>
                        <i className={'fa fa-eject'} onClick={this.close.bind(this)}></i>
                        <i className={'fa fa-step-forward'} onClick={this.playNext.bind(this)} ></i>
                    </div>

                </div>
            </div>
        )
    }

}

export default Work;