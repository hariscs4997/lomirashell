import React,{ Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route,Redirect,Link,NavLink} from "react-router-dom";

export default class Book extends Component {
    constructor(props) {
    super(props);
    this.count=1;
    this.loadBooks = this.loadBooks.bind(this);
    this.state = {
      books:[],
          total:{}
    };
  }
  

  componentDidMount() {
    this.loadBooks();
  
  }
  
  
  
  async loadBooks()
  {
//     const username="admin";
//     const password="admin123"
//     const temp=await axios.post("http://localhost:8000/login/",{username,password})
    
//     if(temp.status==200){
// this.setState(()=>({
//   token:temp.data.token
// }))
//       console.log(this.state.token)
//     }
console.log(this.props.token)
     const AuthStr = 'Token '.concat(this.props.token);
    //console.log(AuthStr)
    const promise = await axios.get("https://lomira-shell.herokuapp.com/book",{ headers: { Authorization: AuthStr, 'Content-Type': 'application/json'
  } });
    const status = promise.status;
  if(status===200)
    { 
         
      this.setState((prevState)=>({
          books:promise.data.data,
          total:promise.data.total
      }));
   console.log(this.state.total)
    }
  }

  render() {
    return(   
     <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a id="fo" className="navbar-brand" >  <img  src={require("./1.png")} /> Lomira</a>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <NavLink className="btn btn-outline-secondary" onClick={this.props.redirect}>Sign Out</NavLink>
      </ul>
      </nav> 
  
{this.state.books.length>0 ?

  <div className="table-responsive change">
  <br/>

  <table className="table">
  <thead className="thead-dark">
  <tr>
  <th scope="col">#</th>
  <th scope="col">Customer Name</th>
  <th scope="col">Purchased Date</th>
  <th scope="col">Truck Number</th>
  <th scope="col">Price Per Gallon</th>
  <th scope="col">Discount</th>
  <th scope="col">Net Price</th>
  <th scope="col">Pump Price</th>
  <th scope="col">Fees</th>
  <th scope="col">Discount On Fuel</th>
  <th scope="col">Gallons Pumped</th>
  <th scope="col">Gross Amount</th>
  <th scope="col">Net Amount</th>

  </tr>

  </thead>
  <tbody>
  {this.state.books.map((table,index)=>
    <tr>
      <th scope="row">{index+1}</th>
        <td >{table.customer}</td>     
        <td >{table.purchased_date}</td>     
        <td >{table.truck_number}</td>     
        <td >{table.base_price}</td>
        <td >{table.discount}</td>
        <td >{table.net_price}</td>  
        <td >{table.pump_price}</td>  
        <td >{table.plus_fees}</td>     
        <td >{table.discount_on_fuel}</td> 
        <td >{table.gallons_pumped}</td>     
        <td >{table.gross_amount}</td>
        <td >{table.net_amount}</td> 
        </tr>
      

        ) }
        <tr>
        <th>TOTAL:</th>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td >{this.state.total.discount_on_fuel_total.discount_on_fuel__sum}</td> 
        <td >{this.state.total.gallons_pumped_total.gallons_pumped__sum}</td>     
        <td >{this.state.total.gross_amount_total.gross_amount__sum}</td>
        <td >{this.state.total.net_amount_total.net_amount__sum}</td> 
        
     </tr>
    
      
  </tbody>
</table>

</div>
:false

}


 
        
  <style jsx>{`
  
  body{
      background: #642B73;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C6426E, #642B73);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C6426E, #642B73); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  }
  
  #fo{
    font-size:20px;
  }
td{
  background:white;
}
th{
  background:white;
}
  
.table-responsive{
  width:90%;
  position:relative;
  left:5%;
}
.table td{
 
}
.table th{
 
}
        `}</style>
 </div>
      )
  }
}
