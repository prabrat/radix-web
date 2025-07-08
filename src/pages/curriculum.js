import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/curriculum.css"

import title from '../images/curriculum/curriculum-title.png'
import activity from '../images/curriculum/activity.jpg'
import morning from '../images/curriculum/morning.png'
import meal from '../images/curriculum/meal.png'
import nap from '../images/curriculum/nap.png'
import art from '../images/curriculum/art.png'
import { Schedule } from '@mui/icons-material';

function curriculum() {
  return (
    <div className='main'>
      <div className='top'>
        <div className='title'>
          <img src={title}/>
        </div>
      </div>
      <div className='bottom'>
        <h1>Your Child's Day</h1>
        <p>
          A consistent daily schedule gives children a sense of stability and security. When they can predict the 
          flow of their day, it creates a comforting sense of familiarity and structure. By incorporating routines 
          and rituals into our teaching, we create a supportive environment that promotes their emotional well-being 
          and helps them grow with confidence.
        </p>
        <div className='schedule'> 
          <div className='day-item'>
            <div className='horizontal'>
              <div className='activity'>Morning</div>
              <p>
                Children begin their day with free play, allowing them to ease into their environment and connect with 
                their surroundings as they arrive. This is followed by an hour of Learning Time, where children engage 
                in educational activities and creative arts—an essential part of their daily routine. Afterward, they 
                enjoy a morning snack to recharge before transitioning to circle time, interactive games, and outdoor 
                play. Their morning concludes with a nutritious lunch, ensuring a well-rounded and fulfilling experience.
              </p>
            </div>
            <img src={morning}/>
          </div>

          <div className='day-item'> 
            <img src={nap}/>
            <div className='horizontal'>
              <div className='activity'>Nap Time</div>
              <p>
                After lunch, the children have nap time, giving them a chance to rest and recharge after a morning 
                filled with learning and outdoor activities.
              </p>
            </div>
          </div>

          <div className='day-item'>
            <div className='horizontal'>
              <div className='activity'>Mealtime</div>
              <p>
                Nutrition is very important for children’s developmental and health needs. It is our goal that every child 
                that attends this program receives two well balanced meals and a snack daily. Morning snack, lunch, and 
                supper is provided daily. 
                
                We provide fresh fruits, vegetables, proteins, and grains daily. Fresh fruit and vegetables are served at 
                least twice a day. 1% milk is provided to children 2 years old and over and whole milk for children under 
                two at least two times a day. Water is available anytime throughout the day.
              </p>
            </div>
            <img src={meal}/>
          </div>

          <div className='day-item'>
            <img src={art}/>
            <div className='horizontal'> 
              <div className='activity'>Art</div>
              <p>
                Art is an essential part of a child's daily routine. Even after engaging in creative activities during 
                the morning, we offer additional opportunities for self-expression through playdough, coloring, and 
                painting. These activities are followed by supper and free play, providing a relaxing and enjoyable way 
                for children to wind down as the day comes to a close.
              </p>
            </div>
          </div>
        </div>

        <div className='end'>
          <h2>We encourage you to visit Radix and learn all about our program in person!</h2>
          <Link to="/contact">
            <button className="contactButton">SCHEDULE A VISIT</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default curriculum
