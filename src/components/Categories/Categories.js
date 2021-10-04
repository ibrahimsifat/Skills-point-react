import React from 'react';
import { Card } from 'react-bootstrap';
import { faArrowRight, faBookOpen, faBriefcase, faDatabase, faHashtag, faHeartbeat, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// font awesome icon
const Book = <FontAwesomeIcon icon={faBookOpen
} />
const Code = <FontAwesomeIcon icon={faLaptopCode
} />
const Data = <FontAwesomeIcon icon={faDatabase 
} />

const Health = <FontAwesomeIcon icon={faHeartbeat
} />
const HashTag = <FontAwesomeIcon icon={faHashtag
} />
const Briefcase = <FontAwesomeIcon icon={faBriefcase
} />
const RightArrow = <FontAwesomeIcon icon={faArrowRight
} />
const LanguageText='Our modular degree learning experience gives you the ability to study online anytime and earn credit as you complete your course assignments'

const Categories = () => {
    return (
        <div className='py-10 container mx-auto md:grid grid-cols-3 gap-2 justify-around items-center '>
           <SimpleCard icon={Book} title='Language' id='1' text={LanguageText}></SimpleCard>
           <SimpleCard icon={Code} title='IT Courses' id='2' text={LanguageText}></SimpleCard>
           <SimpleCard icon={Data} title='Data Science'  id='3' text={LanguageText}></SimpleCard>
           <SimpleCard icon={Health} title='Health' id='4' text={LanguageText}></SimpleCard>
           <SimpleCard icon={HashTag} title='Math' id='5' text={LanguageText}></SimpleCard>
           <SimpleCard icon={Briefcase} title='Business' id='6' text={LanguageText}></SimpleCard>
        </div>
    );
};



const SimpleCard=(props)=>{
    const {icon,title,text,id}=props
    const url=`/category/${id}`
    return(
        <Card className='zoom cardShadow my-3' variant='dark' border="light" style={{ width: '18rem' }}>
       <h1 className='px-4 pt-2 text-blue-400'>{icon}</h1>
        <Card.Body>
          <Card.Title><h5  className='font-bold -mt-2'>{title}</h5></Card.Title>
          <Card.Text className='text-gray-600'>
    {text}
          </Card.Text>
          <button className='text-gray-600 no-underline'><span className='text-blue-400'>{RightArrow}</span> 
          <Link className=' pl-2 no-underline' to={url}>View More</Link>
          </button>
        </Card.Body>
      </Card>

    )
}

export default Categories;