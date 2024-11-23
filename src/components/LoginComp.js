import React, { useState } from "react";
import "../General.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginComp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        const user = { email, password };

        try {
            const res = await axios.post('https://reqres.in/api/login', user);

            if (res.data && res.data.token) {
                const token = res.data.token;
                localStorage.setItem('token', token);
                navigate('/UserListComp');
            }
        } catch (error) {

            console.error("error");

        }
    }

    return (
        <>
            <div className="container">
                <div className="login-card">
                    <form style={{ marginTop: "40px" }}>
                        <label style={{ paddingLeft: "15px" }}><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M12 14c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z"></path>
                            <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z"></path>
                        </svg></label>
                        <input style={{ paddingTop: "10px", marginLeft: "10px" }} type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <div className="form-label"><label style={{ paddingLeft: "15px" }}><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M12 14c-4 0-8 2-8 6v1h16v-1c0-4-4-6-8-6z"></path>
                            <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z"></path>
                        </svg></label>
                            <input style={{ paddingTop: "10px", marginLeft: "10px" }} type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                        <input style={{ marginTop: '5px', marginLeft: "20px" }} type="checkbox" /><label>Remember me</label><br />

                        <button className="button-width" type="submit" onClick={(e) => handleSubmit(e)} style={{ marginLeft: "20px", marginTop: "10px", backgroundColor: "skyblue" }}>Login</button>

                    </form>


                </div>
            </div>

        </>
    )


}
export default LoginComp;