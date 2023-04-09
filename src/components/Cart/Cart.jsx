import React from 'react';

const Cart = ({cart,handleRemovefromCart}) => {
    // conditional rendering
    let message;
    if(cart.length===0){
        message=<p>add some product</p>
    }
    else{
        message=<div><h2>borolok</h2></div>
    }

    return (
        <div>
            <h2>Order summery:{cart.length}</h2>
            {/* 2..contional rendering ternery condition*/}
            {cart.length>2 ? <span>aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt=> <p 
                    key={tshirt._id}
                >
                    {tshirt.name}
                    
                  
                  <button onClick={()=>handleRemovefromCart(tshirt._id)}>x</button>
                  </p>)   
                           }
            
        </div>
    );
};
// conditonal chaining
// 1.use if else to set a variable that will contain an elements and components
// 2.ternery condition ? "true" :"false"
export default Cart;