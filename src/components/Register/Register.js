import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="login-form">
                <div>
                    <div>
                        <h2>Register : Create Account</h2>
                    </div>
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <input type="password" name="" id="" placeholder="Re-enter your Password" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Already have an account? <Link to="/login">Login </Link></p>
                    <div>-------or------</div>
                    <button className="btn-regular">Google Sign In</button>
                </div>
            </div>
        </div>
        
    );
};

export default Register;