import { React, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
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
                <div className="container d-flex align-items-center min-vh-100">
                    <div className="row  justify-content-center">
                        <div className="col-md-9 p-5 d-flex ">
                            <div className="card shadow mx-auto w-100 card-login d-flex align-items-center justify-content-center" style={{ height: '500px' }}>
                                <div className="card-body p-5 text-white w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                                    <div className="row">
                                        <div className="col">
                                            <div className="row p-3 justify-content-center">
                                                <div className="col-md-7 p-3">
                                                    <img className="w-100 text-center h-100" src="/Image/LoogMasmindo.webp" alt="Masmindo Logo" />
                                                </div>
                                            </div>
                                            <form onSubmit={handleLogin}>
                                                <div className="row">
                                                    <div className="mb-5">
                                                        <input
                                                            type="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            className="form-control rounded-0 w-100 shadow"
                                                            placeholder="Email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-5">
                                                        <div className="input-group w-100">
                                                            <input
                                                                type={showPassword ? 'text' : 'password'}
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                className="form-control rounded-0 shadow"
                                                                placeholder="Password"
                                                                required
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn shadow btn-outline-secondary"
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                {showPassword ? 'Sembunyikan' : 'Lihat'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <button className="btn shadow text-white btn-sm p-2 rounded-0 w-100" style={{ backgroundColor: '#115258' }}>LogIn</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                                            <div className="text-start">
                                                <h1>Hello</h1>
                                                <h3>
                                                    Admin <span style={{ color: "#5C522A", backgroundColor: 'white' }}>Masmindo</span>
                                                </h3>
                                                <h5>Siap Bekerja hari ini?</h5>
                                                <p>_site Office</p>
                                            </div>
                                        </div>

                                    </div>
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