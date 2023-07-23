import React, {useState} from "react"
import { NavLink } from "react-router-dom"
const SignUp = () => {

    const [udata, setData]= useState({
        fname:"",
        email:"",
        mobile: "",
        password: "",
        cpassword: ""
    });

    const adddata = (e) =>{
        const {name,value} = e.target;

        setData(()=>{
            return{
                ...udata,
                [name]:value
    
            } 
         })
         console.log(e.target.value);
            
    
        //}
        // const {name, value} = e.target;
        
    }
    

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="amazonlogo" />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Register</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your Name</label>
                            <input type="text" name="fname" id="fname" 
                             onChange={adddata} value={udata.fname} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" 
                            onChange={adddata} value={udata.email} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text" name="mobile" id="mobile"
                             onChange={adddata} value={udata.mobile} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="At least 6 Char"
                             onChange={adddata} value={udata.password} />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password Again</label>
                            <input type="password" name="cpassword" id="password" 
                             onChange={adddata} value={udata.cpassword}/>
                        </div>
                        <button className="signin_btn">Continue</button>
                        <div className="signin_info">
                            <p>Already have an Account</p>
                            <NavLink to="/login">SignIn</NavLink>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default SignUp