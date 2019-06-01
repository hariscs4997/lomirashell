import React from "react"
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export default class Login extends React.Component{
constructor(props){
    super(props);
}



componentDidMount(){
    this.props.setsign();
    
}
    render(){
        return(    
   <div>    
   <br/>
   <br/>
   <br/>
   <br/>
   <MDBContainer>
   <MDBRow class="wid">
     <MDBCol md="6">
       <MDBCard>
         <div className="header pt-3 grey lighten-2">
           <MDBRow className="d-flex justify-content-space-between">
             <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
               Log in
               <img  id="im" src={require("./1.png")} />
           
               </h3>
            
           </MDBRow>
         </div>
         <MDBCardBody className="mx-4 mt-4">
          <form onSubmit={(e)=>{
             e.preventDefault();
        //    console.log(e.target.elements.username.value)
             this.props.click(e.target.elements.username.value,e.target.elements.password.value)       
         }
         }>
         {this.props.error &&<p className="error">{this.props.error}</p>}    
         <label htmlFor="defaultFormLoginEmailEx"  >
         <strong className="fo">    Username
         </strong>            </label>
           <input type="text" name="username" id="defaultFormCardNameEx"
           className="form-control" placeholder="Username" autoFocus required/>
          <br/>
           <label htmlFor="defaultFormLoginEmailEx" >
          <strong className="fo"> Password</strong>
         </label>
           <input type="password" name="password" id="defaultFormCardNameEx"
           className="form-control"  placeholder="Password" required/>
   <br/>        
           <p className="font-small grey-text d-flex justify-content-end">
             
             <a
             href="https://lomira-shell.herokuapp.com/password_reset/"
               className="dark-grey-text font-weight-bold ml-1"
             >
             Forgot Password?
             </a>
           </p>
           <div className="text-center mb-4 mt-5">
             <MDBBtn
               color="danger"
               type="submit"
               className="btn-block z-depth-2"
               
             >
               Log In
             </MDBBtn>
           </div>
           <p className="font-small grey-text d-flex justify-content-center">
             Don't have an account?
             <NavLink
               to="/signup"
               className="dark-grey-text font-weight-bold ml-1"
             >
               Sign up
             </NavLink>
           </p>
           </form>
         </MDBCardBody>
       </MDBCard>
     </MDBCol>
   </MDBRow>
 </MDBContainer>

        <style jsx>{`
        .is-active{
            font-weight: bold;
        }
        .fo{
          font-size:24px;
        }
        #lol{
          position:relative;
          right:0%;
          
        }
        #im{
          display: flex;
         position:absolute;
         right:5.5%;
         top:5%;
        }
        body{
            background: #642B73;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        }
        .error{
            color:rgb(102,32,40);
            font-weight:bold;
            border:5px solid rgb(255,220,226);
            border-width:100%;
            background-color:rgb(255,220,226); 
        }
        .header.pt-3.grey.lighten-2{
        background:lightgray;
        }
        .card{
            position: relative;
            left:50%;
        }
        .form-simple .font-small {
            font-size: 0.8rem; }
          
          .form-simple .header {
            border-top-left-radius: .3rem;
            border-top-right-radius: .3rem; }
          
          .form-simple input[type=text]:focus:not([readonly]) {
            border-bottom: 1px solid #ff3547;
            -webkit-box-shadow: 0 1px 0 0 #ff3547;
            box-shadow: 0 1px 0 0 #ff3547; }
          
          .form-simple input[type=text]:focus:not([readonly]) + label {
            color: #4f4f4f; }
          
          .form-simple input[type=password]:focus:not([readonly]) {
            border-bottom: 1px solid #ff3547;
            -webkit-box-shadow: 0 1px 0 0 #ff3547;
            box-shadow: 0 1px 0 0 #ff3547; }
          
          .form-simple input[type=password]:focus:not([readonly]) + label {
            color: #4f4f4f; }
        
            @media screen and (max-width: 768px) {
               .card {
                  left:0%;
                }
              }
              
                `}</style>
           </div>
        )
    }
}