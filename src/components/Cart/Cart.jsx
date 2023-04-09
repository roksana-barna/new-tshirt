import React from 'react';
import "./Cart.css";

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
            {/* conditional styling */}
            <h2 className={cart.length ===1 ? "red" : "blue"}>Order summery:{cart.length}</h2>
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
                           {/* logical && */}
                           {
                            cart.length===2 && <p>double</p>
                           }
                           {
                            cart.length>3 || <p>jah fokir</p>
                           }
            
        </div>
    );
};
// conditonal chaining
// 1.use if else to set a variable that will contain an elements and components
// 2.ternery condition ? "true" :"false"
// 3.logical &&: if the condition is true the next thing will be displayed
// 4.logical ||if the condition is false then the the next thing will be displayed (|| nahoy)
export default Cart;