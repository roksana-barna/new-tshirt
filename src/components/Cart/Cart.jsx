import React from 'react';

const Cart = ({cart,handleRemovefromCart}) => {
    return (
        <div>
            <h2>Order summery:{cart.length}</h2>
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

export default Cart;