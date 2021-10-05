import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='flex justify-center items-center text-white 
                about_container flex-col'>
                <h2 className='font-bold'>About Us</h2>
                <div>
                <NavLink className='no-underline text-blue-200 ' to ='/home'>Home</NavLink>
                <span> / </span>
                <span>About Us</span>
                </div>
             </div>
            <div  className=' pb-8 about-section mt-8 flex justify-center items-center 
                 flex-col ' >
                <h2 className='font-bold'>About Skills Point</h2>
<h6>The Majority have suffered alteration in some form, by injected humor

</h6>
                <div className="wrapper grid grid-cols-2 gap-4 container pt-8">
                    <div className="frist">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat</p>
                    </div>
                    <div className="secound">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;