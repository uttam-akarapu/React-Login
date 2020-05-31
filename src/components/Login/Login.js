import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from "./Login.module.css";
import CreateAccount from '../CreateAccount/CreateAccount';
import LoginFields from './LoginFields/LoginFields';


class Login extends Component {
    constructor(props) {
        super(props);

    }

    formSubmitHandler=(e)=>{
        e.preventDefault();
    }
    

    render() {
        return (
            <div>
                
                <LoginFields SubmitHandler={this.formSubmitHandler}/>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;