import React from 'react';
import banner from '../../img/banner.png';

import './Home.css'
const Home = () => {
    return (
        <div className=' bg-blue-300 '>
            <div className="container md:flex items-center">
           <div className="left_site">
          <h2 className='font-bold text-white text-4xl'>The World's Largest Selection of Courses</h2>
          <p className='text-xl text-gray-100'>It is a long established fact that a reader will be distracted by the readable.</p>
           </div>
           <div className="left_site">
           <img className='' src={banner} alt="" />
           </div>
            </div>
            
        </div>
    );
};

export default Home;