import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anty from '../Anty/Anty';
import "./Grandpa.css";

const Grandpa = () => {
    const ring='diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
           <section className='flex'>
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Anty></Anty>
            
           </section>
        </div>
    );
};

export default Grandpa;