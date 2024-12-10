import React from 'react';
import './Biography.css';

const Biography = () => {
  return (
    <div className="biography">
      <h1>About Me</h1>
      <div className="biography-content">
        <div className="headshot-container">
          <img src={`${process.env.PUBLIC_URL}/images/taiwan2.JPG`} className="headshot" />
        </div>
        <div className="biography-text">
          <p>
            I am a Taiwanese American, born and raised in Potomac, Maryland. Growing up, I loved being active and played a variety of sports including baseball, soccer, basketball, squash, swimming, and lacrosse. My passion for sports led me to discover my calling in running when I ran the pacer test in middle school and was recruited by the cross country coach in 2013.
          </p>
          <p>
            In 2015, I ran varsity track and cross country year-round at the Landon School. My dedication to sports continued as I pursued higher education at the University of Maryland College Park, where I studied computer science and graduated with a Bachelor's in Information Science in 2022.
          </p>
          <p>
            During my college years, I transitioned from running to playing golf. After graduation, I moved to Boston in the summer of 2023 to work for MassMutual as a DevOps Engineer. I lived in Boston for two years and pursued my Master's in Computer Science at Boston University starting in the summer of 2023.
          </p>
          <p>
            While in Boston, I played a lot of golf until I dislocated my shoulder playing basketball. This injury led me to start playing pickleball, as it allowed me to stay active even with one arm in a sling. Recently, in August 2024, I moved to New York to continue my journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;