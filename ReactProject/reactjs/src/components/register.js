import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const { http, setToken } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => {
        // api call
        // http.post('/register', { email: email, password: password, name: name }).then((res) => {
        // });
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="row justify-content-center pt-5">
                <div className="col-sm-6">
                    <div className="card p-4" style={{ backgroundColor: "#FFF", borderRadius: "20px" }}>
                        {/* Add borderRadius style property */}
                        <h1 className="text-center mb-3">Register </h1>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address:</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={submitForm}
                            className="btn btn-primary mt-4"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <footer className="text-center mt-4">
                
            </footer>
        </div>
    );
}
