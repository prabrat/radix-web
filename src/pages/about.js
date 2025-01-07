import React from 'react';
import AboutImage from '../images/about/about.jpg';
import AboutMain from '../images/about/about-main.png'
import "../styles/about.css";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'>
        <img src={AboutMain} /> 
      </div> 
      <div className='aboutBottom'>
        <div className='left' > 
          <img src={AboutImage} className='aboutIMG' /> 
        </div> 
        <div className='right'>
          <p>
            My name is Bhavna Jain, an engineer by education, former lecturer by profession teaching computer networking to graduate level courses and full-time proud mom to my middle-schooler and high-schooler "cartoons." Raising two demanding kids definitely helps me feel for other young parents going through this beautiful yet challenging phase of life. 
          </p>
          <p>
            When I look back, this time was indeed the most beautiful part of this journey that we always wish in future to travel back to and wish we enjoyed our kids as much as we should have and play with them.
          </p>
          <p>
            Some of my all-time hobbies are cooking, reading books (spiritual), being part of social causes, and running behind my kids to ensure they eat and study well. With a long gap in my professional career due to family priorities, I have been lucky to have the opportunity to work as a lead teacher in Childcare Centers in Columbia, MD, and in Eldersburg. Ever since starting in childcare work, I have been cherishing getting together with sweet kids and taking very seriously the responsibility of creating beautiful and happy minds.
          </p>
          <p>
            Please feel free to reach me at <b>667-802-9169</b>. A good healthy chit-chat is always the way to go—you will make my day in the process. We are located at <b>822 Herman Way, Sykesville, Maryland</b>, and feel blessed to be living among the best neighbors and a very safe community.
          </p>
          <Link to="/contact"> 
            <button className='contactButton'>Get in Touch</button>
          </Link>
        </div>
      </div> 
    </div>
  );
}

export default About;
