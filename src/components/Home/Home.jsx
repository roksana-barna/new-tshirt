import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import "./Home.css";

const Home = () => {
    const tshirts=useLoaderData();
    const [cart,setCart]=useState([]);
    const handleAddToCart =tshirt =>{
      const newCart=[...cart,tshirt]
      setCart(newCart);
    }
    const handleRemovefromCart=id=>{
        const remaining=cart.filter(ts=>ts._id !==id);
        setCart(remaining);

    }

    // console.log(tshirts)
    return (
        <div className='home-container'>
          <div className='tshirts-container'>
          {
            tshirts.map(tshirt=><Tshirt 
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}

            >

            </Tshirt>)
           }

          </div>
          <div className='cart-container'>
            <Cart 
            cart={cart}
            handleRemovefromCart={handleRemovefromCart}
            ></Cart>

          </div>
        </div>
    );
};

export default Home;