import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// font awesome icon
const Arrow = <FontAwesomeIcon icon={faChevronRight} />
const Footer = () => {
    return (
        <div className='bg-gray-800 mt-52'>
          <div className="footer container mx-auto flex text-gray-400 p-10 justify-between items-center">
              <div className="frist">
                  <h3>Skills Point</h3>
                  <p>Second stret, New York, NY 10012, US</p>
                  <p>info@example.com, info@edomi.com</p>
                  <p>+ 01 234 567 88</p>
                  <p>+ 01 234 567 89</p>

              </div>
              <div className="secound">
                  <h3>Categories</h3>
                  <p><span className='pr-1'>{Arrow}</span> Software Development</p>
                  <p><span className='pr-1'>{Arrow}</span> Web Development</p>
                  <p><span className='pr-1'>{Arrow}</span> Web Designing</p>
                  <p><span className='pr-1'>{Arrow}</span>Business Classes</p>
                  <p><span className='pr-1'>{Arrow}</span> Networking Classes</p>
              </div>
              <div className="threed">
                  <h3>Our Company</h3>
                  <p><span className='pr-1'>{Arrow}</span>Our Team</p>
                  <p><span className='pr-1'>{Arrow}</span>Contact US</p>
                  <p><span className='pr-1'>{Arrow}</span> About Us</p>
                  <p><span className='pr-1'>{Arrow}</span> Services</p>
                  <p><span className='pr-1'>{Arrow}</span> Online Classesm</p>
              </div>
              <div className="fourth">
<h3>Courses</h3>
<p><span className='pr-1'>{Arrow}</span> Angular</p>
<p><span className='pr-1'>{Arrow}</span> Java</p>
<p><span className='pr-1'>{Arrow}</span> HTML</p>
<p><span className='pr-1'>{Arrow}</span> Devops</p>
<p><span className='pr-1'>{Arrow} </span> Php Laravel</p>

              </div>
          </div>
        </div>
    );
};

export default Footer;