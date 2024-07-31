import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css"

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'Khushi' && password === 'k123') {
            setIsAuthenticated(true);
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container mt-5 pt-1">
            <form className='mx-auto d-block w-25 mt-5 login_form' onSubmit={handleLogin}>
                <img src='assets/img/miraggio_logo.webp' alt='' className='img-fluid mx-auto d-block miraggion_login_logo'></img>
                <h3 className='text-center fw-bold login_text' style={{ paddingTop: "0px" }}>LOG IN</h3>
                <div className='mt-4'>
                    <div class="form-floating ">
                        <input type="text" className="form-control px-5 login_input border-bottom border-0 rounded-0" placeholder='Name' value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                        <label className='text-light'>Username</label>
                    </div>
                </div>
                <div className='mt-4 '>
                    <div class="form-floating">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control px-5 login_input border-bottom border-0 rounded-0"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className='text-light'>Password</label>
                        <i
                            className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} position-absolute top-50 end-0 translate-middle-y pe-3 cursor-pointer`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>
                </div>
                <button type='submit' className='btn mt-5 px-4 py-2 fw-bold btn-login'>LOG IN</button>
            </form>
        </div>
    );
};

export default Login;