import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../../api/requests';
import './Login.css';
import storage from '../../Context/Context';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { setUserInfo } = useContext(storage);

    const navigate = useNavigate();

    const handleLogin = async () => {
        requestLogin('/', { email, password })
            .then((data) => {
                setUserInfo(data);
                navigate('/home');
            })
            .catch(() => setError(true));
    };

    return (
        <div className='login_container'>
            <div className='login-area'>
                <div className='email_user'>
                    <label htmlFor="email_user">Digite seu e-mail:</label>
                    < input
                        className="inputFormsSm"
                        id="email_user"
                        type="e-mail"
                        name="email_user"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='password_user'>
                    <label htmlFor="password_user">Digite sua senha:</label>
                    < input
                        type="password"
                        name="password_user"
                        id="password_user"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="inputFormsSm"
                    />
                </div>
                <div className='btn-enviar'>
                    <div className="primaryButton">
                        <button
                            onClick={() => handleLogin()}
                            type="button"
                        >Login</button>
                    </div>
                </div>
            </div>
        </div >
    )
};


export default Login;
