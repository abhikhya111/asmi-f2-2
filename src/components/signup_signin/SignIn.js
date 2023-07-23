import React, {useState} from "react"
import './signup.css';
import { NavLink } from "react-router-dom";
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

    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="">
                        <img width="150px" style={{marginTop:"25px", marginBottom:"80px"}} src="./AsmiBoutique.png" alt="amazonlogo" />
                    </div>
                    <div className="sign_form">
                        <form>
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
                                v1alue={logdata.password} />
                            </div>
                            <button className="signin_btn">Continue</button>
                        </form>
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