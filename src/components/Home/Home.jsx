import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import "./Home.css";

const Home = () => {
    const tshirts=useLoaderData();
    console.log(tshirts)
    return (
        <div className='home-container'>
          <div className='tshirts-container'>
          {
            tshirts.map(tshirt=><Tshirt 
                key={tshirt.id}
                tshirt={tshirt}

            >

            </Tshirt>)
           }

          </div>
          <div className='cart-container'>
            <Cart></Cart>

          </div>
        </div>
    );
};

export default Home;