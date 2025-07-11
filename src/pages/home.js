import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';  // Make sure to import the Splide CSS
import '../styles/home.css';
import background from '../images/home/doodle.jpg';
import infant from '../images/home/infants.png';
import toddler from '../images/home/toddlers.png';
import preschool from '../images/home/preschool.png';
import toyIMG from '../images/home/toy.png'; 
import clothIMG from '../images/home/cloth.jpg';
import tempSponsor from '../images/home/tempSponsor.png';

function Home() {
  const programs = [
    {
      name: 'Infants',
      description: 'Nurturing care for ages 0-12 months',
      image: infant,
    },
    {
      name: 'Toddlers',
      description: 'Active learning for ages 1-2 years',
      image: toddler,
    },
    {
      name: 'Preschool',
      description: 'Early education for ages 3-5 years',
      image: preschool,
    },
  ];

  const reviews = [
    {
      id: 1,
      text: "I really loved having my children with Ms. Bhavna of Radix Childcare in Eldersburg, MD. We realized that my daughter would benefit from a daycare for socialization and physical development and luckily found Ms. Bhavna. She has been a great help with getting her caught up and prepared for school. My second child has also benefited from socialization, learning routines, and preparing for school. Ms. Bhavna is very patient, kind, and nurturing with the children under her care. I would highly recommend her daycare."
    },
    {
      id: 2,
      text: "My daughter has been going here for a year now and we couldn't be more happier. This daycare is where you can leave your child and be at ease knowing they are in the right hands and in good care. I would definitely recommend Radix child care for anyone looking for child care."
    },
    {
      id: 3,
      text: "We have been pleased with the care provided, the healthy foods given, and the developmental aspect for a home daycare. It has been a great atmosphere and has really kick started my daughter to be able to thrive in preschool!!"
    },
  ];

  const splideOptions = {
    type: 'fade',
    perPage: 1,
    perMove: 1,
    arrows: true,
    pagination: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    gap: '1rem',
    height: 'auto',
    breakpoints: {
      640: {
        arrows: false,
      }
    }
  };

  return (
    <div>
      <div className="backgroundImage" style={{ backgroundImage: `url(${background})` }}>
        <div className="homeTop">
          <div className='header'>LEARN THROUGH PLAY</div>
          <h2>Contact us to learn more about the programs we offer and to schedule a visit!</h2>
          <Link to="/contact">
            <button className="contactButton">SCHEDULE A VISIT</button>
          </Link>
        </div>
      </div>

      <section className="programs">
        <h2>Programs Offered at Radix</h2>
        <div className="allPrograms">
          {programs.map((program) => (
            <div key={program.name} className="item">
              <div className="programImage">
                <img src={program.image} alt={program.name} />
              </div>
              <h3>{program.name}</h3>
            </div>
          ))}
        </div>
        
        <div className='buttons'> 
          <Link to="/about/curriculum">
            <button className="curriculumButton">VIEW OUR CURRICULUM</button>
          </Link>
          <Link to="/forms">
            <button className="formsButton">Access Forms</button>
          </Link>
        </div> 
      </section>

      <section className="reviews">
        <div className="reviewContent">
          <h2>Hear From Our Parents</h2>
          <Splide options={splideOptions} className="allReviews">
            {reviews.map((review) => (
              <SplideSlide key={review.id}>
                <div className="review-slide">
                  <blockquote className="reviewText">"{review.text}"</blockquote>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      <section className="partners"> 
        <h2>Giving Back</h2>
        <div className="partnerContent"> 
          <div className="toyDrive"> 
            <img src={toyIMG} className="toyImage"/> 
            <section className="toyText">   
              <p>We host an annual toy drive to donate to those in need</p>
            </section>
          </div> 

          <div className="clothingDrive"> 
            <img src={clothIMG} className="clothingImage"/> 
            <section className="clothText"> 
              <p>We host an annual winter clothing drive to donate to those in need</p>
            </section>
          </div>

          <div className="crew"> 
            <a href="https://www.marylandcrew.org" target="_blank" rel="noopener noreferrer">
              <img src={tempSponsor} className="crewImage"/> 
            </a>
            <section className="crewText"> 
              <p>We believe in supporting local organizations. That why we give back Maryland Men's Crew, a University of Maryland club team.</p>
            </section>
          </div> 
        </div> 
      </section>  
    </div>
  );
}

export default Home;