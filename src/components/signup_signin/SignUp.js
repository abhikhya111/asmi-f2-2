import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const dispatch = useDispatch();
    const [udata, setData]= useState({
        fname:"",
        email:"",
        mobile: "",
        password: "",
        cpassword: ""
    });
    // const  {users } = useSelector((state) => state.allUsers);
    const adddata = (e) =>{
        const {name,value} = e.target;

        setData(()=>{
            return{
                ...udata,
                [name]:value
    
            } 
         })
    }

    const senddata = async (e) => {
        e.preventDefault();

        const { fname, email, mobile, password, cpassword } = udata;
        const res = await fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        console.log(data);

        if(res.status == 201){
            toast.success('User Registered Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else if(res.status == 500){
            toast.error('Please fill values properly', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    
    useEffect(()=>{
        // dispatch(registerUser())
    },[])

    return (
        <section>
            <div className="sign_container">
                
                <div className="sign_form">
                    <form method="POST">
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
                        <button className="signin_btn" onClick={senddata} >Continue</button>
                        <div className="signin_info">
                            <p>Already have an Account</p>
                            <NavLink to="/login">SignIn</NavLink>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default SignUp