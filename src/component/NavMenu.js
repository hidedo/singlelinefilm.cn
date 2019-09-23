import React , { Component } from "react";
import '../css/NavMenu.css'
import {NavLink} from "react-router-dom";

class NavMenu extends Component{
    state={
        group:''
    }

    setCategory(value){
        this.props.callParent(value);
        this.setState({group:value})
}
    mouseEnter(){
        this.setState({subNav:true})
    }

    mouseLeave(){
        this.setState({subNav:false})

    }
    render() {
        return(
            <header>
                <nav className={'main-nav'} style={{'display':this.props.homeIn?'none':'flex'}}>
                <NavLink to ={'/'} exact={true}><h5>HOME</h5></NavLink>
                <NavLink to ={'/work'}
                         onMouseEnter={this.mouseEnter.bind(this)}

                ><h5>WORK</h5></NavLink>
                <NavLink to ={'/about'} ><h5>ABOUT</h5></NavLink>
                <NavLink to ={'/contact'}><h5>CONTACT</h5></NavLink>

            </nav>
                <nav className={'sub-nav'} style={{'display':this.props.subNav?'flex':'none'}}

                     onMouseLeave={this.mouseLeave.bind(this)}
                >
                    <span onClick={this.setCategory.bind(this,'All')} style={{'color':this.state.group=='All'?'darkgrey':''}}>All</span>
                    <span onClick={this.setCategory.bind(this,'Brand')}  style={{'color':this.state.group=='Brand'?'darkgrey':''}}>Brand</span>
                    <span onClick={this.setCategory.bind(this,'Story')}  style={{'color':this.state.group=='Story'?'darkgrey':''}}>Story</span>
                    <span onClick={this.setCategory.bind(this,'TV')} style={{'color':this.state.group=='TV'?'darkgrey':''}}>TV</span>
                </nav>
                <div className={'logo'} style={{'display':this.props.homeIn?'none':'block'}}>

                </div>
            </header>

        )

    }
    }

export default NavMenu;