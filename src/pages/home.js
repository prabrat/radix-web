import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';  // Make sure to import the Splide CSS
import '../styles/home.css';
import background from '../images/home/Background.jpg';
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
      text: "The teachers are SO very knowledgeable. My children surprise me at home every day with new things they can do. When I have questions about developmental appropriateness for what I need to do to support my children's growth, they are courteous and knowledgeable about how I can help at home with their development."
    },
    {
      id: 2,
      text: "We couldn't be happier with the care and education our child receives. The staff is incredibly attentive and creates such a warm, nurturing environment. Our little one has grown so much since starting here!"
    },
    {
      id: 3,
      text: "The curriculum is excellent and the teachers truly care about each child's development. We've seen remarkable progress in our daughter's social skills and early learning fundamentals."
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
          <h1>Dependable Day Care in</h1>
          <h1>Sykesville, MD</h1>
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
          <Link to="/curriculum">
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