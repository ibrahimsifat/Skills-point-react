import React from 'react';
import Use1 from '../../img/employees-2.png'
import Use2 from '../../img/user-2.png'
import Use3 from '../../img/gurantee-2.png'
import Use4 from '../../img/quality-2.png'
import Cart from './Cart'
const Why = () => {
    return (
        <div className='container '>
<div className="my-10">
<h2 className='font-bold'>
Why Skills Point?

</h2>
<h5 className='text-gray-500'>Online or on campus, the choice is yours</h5>
</div>
<div className="card-wapper grid grid-cols-4 gap-y-10  ">
  
    <Cart title='Experience' img={Use1}></Cart>
    <Cart title='Professionality' img={Use2}></Cart>
    <Cart title='Guarantee' img={Use3}></Cart>
    <Cart title='Quality' img={Use4}></Cart>
</div>
        </div>
    );
};

export default Why;