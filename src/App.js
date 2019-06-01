import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import axios from "axios";
import Book from "./Component/Book/index";
import Login from "./Component/Book/Login";
import Signup from "./Component/Book/Signup";

class App extends Component {
constructor(props){
  super(props);
  
  this.state={
    redirect:false,
    token:undefined,
    error:undefined,
    signup:false,
    username:undefined,
    email:undefined,
    password1:undefined,
    password2:undefined,
    
  }
  this.click=this.click.bind(this);
    this.redirect=this.redirect.bind(this);
   this.sign=this.sign.bind(this);
   this.setsign=this.setsign.bind(this);
}

setsign(){
  this.setState(()=>({
signup:false
  }))
}
async sign(username,email,password1,password2){
 
  let username1;
  let email1;
  let password11;
  let password21;
  const temp=await axios.post("https://lomira-shell.herokuapp.com/signup_auth/",{username,email,password1,password2})
  .catch(function (error) {
    
    if(!!error.response.data.username){
     username1=error.response.data.username[0];}
     else if(!!error.response.data.email){
     email1=error.response.data.email[0];}
     else if(!!error.response.data.password1){
     password11=error.response.data.password1[0];}
     else if(!!error.response.data.non_field_errors){
     password21=error.response.data.non_field_errors[0];}
    
  });
  //console.log(temp)
  if(temp){
  this.setState(()=>({
    signup:true,
    username:undefined,
    email:undefined,
    password1:undefined,
    password2:undefined,
   
  }))
}
else{

 this.setState(()=>({
  username:username1,
  email:email1,
  password1:password11,
  password2:password21,
 
 }))
//console.log(username1+email1+password11+password21);
}
}

async click(username,password){
  
  //preventDefault();
 const temp=await axios.post("https://lomira-shell.herokuapp.com/login/",{username,password})
 .catch(function (error) {
  // console.log(JSON.stringify(error.response))
 });

 if(temp&&temp.status===200){
this.setState(()=>({
  token:temp.data.token,
  redirect:true,
  error:undefined,
}))

 }
 else {
 const error="INVALID USERNAME OR PASSWORD"
 this.setState(()=>({
 error
 }))
// console.log(this.state.error)
}
}
async redirect(){
this.setState(()=>({
  redirect:false,
  token:undefined
}))
localStorage.setItem('token', this.state.token);
const AuthStr = 'Token '.concat(this.state.token);
  //console.log(AuthStr)
  const promise = await axios.get("https://lomira-shell.herokuapp.com/logout",{ headers: { Authorization: AuthStr } });
//console.log(promise)

}
    

  render() {
    return (
<div>   
<Router>
        <Route path="/" exact  render={()=>(
          this.state.redirect ?(<Redirect to="/home"/>)
          :(<Login click={this.click} error={this.state.error} setsign={this.setsign} signup={this.state.signup}/> )
          
        )}/>
    
        <Route path="/home" exact  render={()=>(
          this.state.token ?(<Book token={this.state.token} redirect={this.redirect} />)
          :(<Redirect to="/" /> )
          
        )}/>
        <Route path="/signup" exact  render={()=>(
          this.state.signup ?(
            <Redirect to="/" />):
            (<Signup sign={this.sign} username={this.state.username} email={this.state.email} password1={this.state.password1} password2={this.state.password2}/>)
          
        )}/>
 
        </Router>
    </div>

    );
  }
}
export default App;
