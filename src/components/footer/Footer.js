import React from 'react'
import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className='footer_container'>
                <div className='footr_details_one forres'>
                <h3>Get To Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>                
                 </div>

                 <div className='footr_details_one forres'>
                <h3>Connect With Us</h3>
                <p>Facebook</p>
                <p>twitter</p>
                <p>Instagram</p>                              
                 </div>

                 <div className='footr_details_one forres'>
                <h3>Make money With Us</h3>
                <p>Facebook</p>
                <p>twitter</p>
                <p>Instagram</p>                              
                 </div>
            </div>
            <div className='lastdetails'>
                <img src="./AsmiBoutique.png"  alt="" />
                <p>Condition of use & sale &nbsp;&nbsp;   Privacy Notice&nbsp;&nbsp;  Interest Based Adds 1996-{year},&nbsp;  Amazon.com </p>
            </div>
        </footer>
    )
}
export default Footer