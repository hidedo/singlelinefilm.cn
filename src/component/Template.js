import React , { Component } from "react";
import '../css/Template.css'


import NavMenu from "./NavMenu";




class Template extends Component{


    onChildChange(value){
         this.props.callParent(value)
    }

    render(){
        return(
            <div className={`wrapper ${this.props.loading?'hide':''}`}>
            <NavMenu homeIn={this.props.homeIn} callParent={this.onChildChange.bind(this)} subNav={this.props.subNav}></NavMenu>
            {this.props.children}
            </div>
        )
    }
}


export default Template;