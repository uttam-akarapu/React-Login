import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Styles from "./LoginFields.module.css";
import CreateAccount from "../../CreateAccount/CreateAccount";

const LoginFields = props => {
    return (
        <div className={Styles.login}>
               
                <form className={Styles.form} onSubmit={props.SubmitHandler}>
                    <h2>Login</h2>
                    <hr/>
                    <ul className="list-group">
                        <li className="list-group-item"><label>UserName :</label><input type="text" name="username" /></li>
                        <li className="list-group-item"><label>Password :</label><input type="text" name="password" /></li>
                        <li className="list-group-item"><input type="submit" value='Login'/> <Link to="/CreateAccount">Create Account</Link> </li>
                    </ul>
                   
                </form>
            </div>
    );
};

LoginFields.propTypes = {
    
};

export default LoginFields;