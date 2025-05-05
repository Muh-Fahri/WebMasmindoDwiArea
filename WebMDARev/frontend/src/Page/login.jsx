import { React, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login-admin-123', {
                email,
                password,
            });

            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', user.role);
            if (user.role === 'admin') {
                navigate('/admin');
            }
        } catch (error) {
            alert('Maaf Login Anda Gagal Periksa Kembali Inputan Anda dan Pastikan Benar');
        }
    }






    return (
        <div>
            <div className="bg-login">
                <div className="container d-flex justify-content-center align-items-center min-vh-100">
                    <div className="row w-100">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mx-auto w-75 card-login">
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-md-7 p-3">
                                            <img className="w-100 text-center h-100" src="/Image/LoogMasmindo.webp" alt="" />
                                        </div>
                                    </div>
                                    <form onSubmit={handleLogin}>
                                        <div className="p-3">
                                            <p>Email</p>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                                        </div>
                                        <div className="p-3">
                                            <p>Password</p>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                                        </div>
                                        <div className="p-3">
                                            <button className="btn btn-primary btn-sm">LogIn</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;