import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";



import './login.css';
const Login = () => {
    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const { login } = useLogin();


    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(credentials);
        // Check if login was successful before navigating
        if (!loading) {
            navigate('/');
        }
    };
    

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1 className='login-title'>
                    Log In 
                    {/* <span className='text-blue-500'>TraditionKeepers</span> */}
                </h1>

                <form className='login-form-p' onSubmit={handleSubmit}>
                    <div >
                        <input
                        className = "input field"
                            type='email'
                            placeholder='Email'
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <input
                        className = "input field"
                            type='password'
                            placeholder='Password'
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <button className='btn-login'>Log In</button>
                    </div>
                </form>

                 <div className="otheroption"><Link to={'/signup'} className='link-signup'>Don't have an account? Sign Up</Link>
                 </div>
            </div>
        </div>
    );
};

export default Login;