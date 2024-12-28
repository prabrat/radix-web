import React from 'react'
import AboutImage from '../images/about/about.jpg'
import "../styles/about.css"

function about() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})`}}></div> 
        <div className='aboutBottom'>
            <h1> ABOUT US </h1> 
            <p>My name is Bhavna Jain, an engineer by education, former lecturer by profession teaching computer networking to graduate level courses and full-time proud mom to my middle-schooler and high-schooler "cartoons".  Raising two demanding kids definitely helps me feel for other young parents going through this beautiful yet challenging phase of life. When I look back, this time was indeed the most beautiful part of this journey that we always wish in future to travel back to and wish we enjoyed our kids as much as we should have, and play with them.

Some of my all-time hobbies are cooking, reading books (spiritual), be part of social causes, and running behind my kids to ensure they eat and study well. With a long gap in professional carrier due to family priorities, I have been lucky to have the opportunity to work as a lead teacher in Childcare Centers in Columbia, MD and in Eldersburg and ever since starting in childcare work, I have been cherishing getting together with sweet kids and take very seriously the responsibility of creating beautiful and happy minds.

Please feel free to reach me at 667-802-9169, a good healthy chit-chat is always the way to go, you will make my day in the process. We are located at 822, Herman Way, Sykesville, Maryland, and feel blessed to be living among the best neighbors and a very safe community.

</p>
        </div> 
    </div>
  )
}

export default about
