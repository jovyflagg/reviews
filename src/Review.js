import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  //we are not fetching the whole list. Instead, we are only fetching specific data based on the index.
  const [index,setIndex] = useState(0);
  
  //we are getting all this properties (destructured) from the people array. This will change as our index change. This is how will be accessing data in the array.
 const { name, job, image, text} = people[index];

 const checkNumber = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
 }

 const handleClickRight = async () => {
    await setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
 }
 const handleClickLeft = async () => {
    await setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
 }
 
 const handleClickRandom = async () => {
    let randomNumber = await Math.floor(Math.random() * people.length);
     if(randomNumber === index) {
        randomNumber = index + 1;
     }
     await setIndex(checkNumber(randomNumber));
 }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text} </p>
      <div className="prev-btn">
        <button className="prev-btn">
          <FaChevronLeft onClick={handleClickLeft}/>
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={handleClickRight} />
        </button>
      </div>
        <button className="random-btn" onClick={handleClickRandom}>surprise me</button>
    </article>
  )
};

export default Review;
