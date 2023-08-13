import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Option = ({ productId, get }) => {

    const email = localStorage.getItem('email');
    console.log("productId");
    const removedata = async (productId) => {
        try {
            const res = await fetch(`http://localhost:3000/api/users/cartItems/${email}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId,
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
                // setAccount(datt)
                get();
                toast.success("Item removed from cart 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }

  return <div className='add_remove_select'>
        <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
        </select>
        <p onClick={() => removedata(productId)} style={{ cursor: "pointer" }}>Delete</p><span>|</span>
        <p className='forremovemdeia'>Save or Later</p> <span>|</span>
        <p className='forremovemdeia'>See More Like This</p>
        <ToastContainer />
    </div>;
  
}

export default Option
