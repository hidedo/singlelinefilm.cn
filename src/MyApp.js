import React , { Component } from "react";
import {HashRouter, Route} from "react-router-dom";
import Template from "./component/Template";
import Work from "./component/Work";
import About from "./component/About";
import Home from "./component/Home"
import Contact from "./component/Contact"
import ReactLoading from 'react-loading';
import loader from './css/loader.svg';

class MyApp extends Component{
    state={
        category: 'All',
        subNav:false,
        loading:true,//switch
        homeIn:false,
    }
componentDidMount() {
        const docEl = document.documentElement;
        const recalc = ()=>{
            docEl.style.fontSize = 16 * (docEl.clientWidth / 1366)+'px'
        }

        document.addEventListener('DOMContentLoaded', recalc, false);
        window.addEventListener('resize', recalc, false);
}

    onChildChange(value){
        this.setState({category:value})
    }
    onChildChange2({subNav,loading,homeIn}){
        this.setState({subNav:subNav,loading:loading,homeIn:homeIn})
    }
    onChildChange3({homeIn,loading}){
        this.setState({loading:loading,homeIn:homeIn})
    }


    render(){
        if(navigator.userAgent.indexOf('Mobile')!==-1){
            document.write('please use chrome or safari for PC')

        }
        else
        if(navigator.userAgent.indexOf('Chrome')==-1 && navigator.userAgent.indexOf('Safari')==-1) {

            document.write('please use chrome or safari for PC ')

        }

        return (
        <HashRouter>

                <div>

                    <div className={`loader ${this.state.loading?'':'hide'}`}>
                        <img src={loader} alt="loader"/>
                </div>


                    <Template homeIn={this.state.homeIn } loading={this.state.loading} callParent={this.onChildChange.bind(this)} subNav={this.state.subNav}>
                        <Route path={'/'} exact={true} render={() => {
                            return (<Home callParent={this.onChildChange3.bind(this)}

                            />)
                        }}>
                        </Route>
                        <Route path={'/work'} render={() => {
                            return (<Work category={this.state.category} callParent={this.onChildChange2.bind(this)}/>)
                        }}></Route>
                        <Route path={'/about'} render={() => {
                            return (<About  callParent={this.onChildChange3.bind(this)}/>)
                        }}></Route>
                        <Route path={'/contact'} render={() => {
                            return (<Contact  callParent={this.onChildChange3.bind(this)}/>)
                        }}></Route>
                    </Template>

                    </div>

        </HashRouter>
    );
    }



}


export default MyApp;