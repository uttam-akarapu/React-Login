import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from "./CreateAccount.module.css";
import Login from "../Login/Login";
import {Link} from "react-router-dom";

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state={
           firstname:"",
           lastname:"",
           emailID:"",
           Mobile:"",
           users:[],
           isSubmitted:false

        }

    }


     

    nameHandler =(e) =>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }

    submitHandler=(e)=>{
        e.preventDefault();
        const users=this.state.users;
        users.push(this.state);
        console.log(users);
        this.setState({
            isSubmitted:true
        })

    }

    render() {     
        const {users}= this.state;
        const userEntry = users.map((user,index)=>{
            return(
                <div key={index}>
                    <h3>Welcome {user.firstname} !</h3>
                   
                </div>

            )
        })  

        return (
            <div>
                {!this.state.isSubmitted ? 

                <form onSubmit={this.submitHandler} className={Styles.form}>
                    <h2> Create Account </h2>
                    <hr/>
                <p><label>First Name :</label> <input type="text" value={this.state.firstname} name="firstname" onChange={this.nameHandler} /></p>
               
             <p> <label>Last Name :</label> <input type="text" value={this.state.lastname} name="lastname" onChange={this.nameHandler} /></p>
                <p><label>Email Id :</label> <input type="text" value={this.state.emailID} name="emailID" onChange={this.nameHandler} /></p>
               <p> <label>Mobile Number :</label> <input type="text" value={this.state.Mobile} name="Mobile" onChange={this.nameHandler} /></p>
                <p><input type="submit" className="btn btn-primary"/></p>
                
            </form>
            :
            <div>
           <h2>Form submitted successfully !!</h2>
           {userEntry}
           Now you can <Link to="/" >Login</Link>
           
           </div>
            
            }
                

            </div>
        );
    }
}

CreateAccount.propTypes = {

};

export default CreateAccount;