import React, {useState} from "react"
import './signup.css';
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const SignIn = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    const adddata = (e) => {
    const {name,value} = e.target;

     setData(()=>{
        return{
            ...logdata,
            [name]:value

        } 
     })
    }

    const senddata = async(e) => {
        e.preventDefault();
        const {email, password } = logdata;
        const res = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        const {userlogin } = data;
        console.log("Login Data", userlogin.fname);

        if(res.status == 400 || !data){
            console.log("Invalid details");
            toast.warn("Username or password is incorrect")
        }
        else{
            console.log("Data valid");
            toast.success("Login successfull")
            setData({...logdata, email:"", password:""})
            localStorage.setItem('email', email);
            localStorage.setItem('fname', userlogin.fname);

        }
    }

    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="">
                        <img width="150px" style={{marginTop:"25px", marginBottom:"80px"}} src="./AsmiBoutique.png" alt="amazonlogo" />
                    </div>
                    <div className="sign_form">
                        <form method="POST">
                            <h1>Sign-In</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email"
                                    onChange={adddata} 
                                    value={logdata.email}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="password"
                                    onChange={adddata}>Password</label>
                                <input type="password" name="password" id="password" placeholder="At least 6 Char"
                                value={logdata.password} onChange={adddata}/>
                            </div>
                            <button className="signin_btn" onClick={senddata}>Continue</button>
                        </form>
                        <ToastContainer/>
                    </div>
                    <div className="create_accountinfo">
                        <p>New To Amazon</p>
                        <NavLink to="/register"><button>Create Your Account</button> </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn