import React from 'react';
import './Interests.css';
import ScrollButton from './ScrollButton';

const Interests = () => {
  return (
    <div className="interests">
      <h1>Interests</h1>
      <div className="interest-category">
        <h2>Art</h2>
        <p>
          Art is something that I always enjoyed since I was young. I loved to draw my favorite characters from cartoons and hang them up on my bedroom wall.
          My mom saw my passion and talent for it and tried to encourage me to take classes and learn. I explored different mediums like charcoal, watercolor, and painting.
          Eventually, I found my love for acrylic painting. In highschool, I took painting seriously and entered my pieces in the National Scholastic Art Competitions. Here
          are two pieces that I have entered in the competition and won a Gold Keys. My favorite subjects to paint are landscapes and still life.
        </p>
        <div className="artwork">
              <img src={`${process.env.PUBLIC_URL}/images/painting_tidalbasin.JPG`} className="wrap-left" alt="Painting Tidal Basin" />
              Spring Cherry Blossoms at the Tidal Basin in Washington, D.C.
              <img src={`${process.env.PUBLIC_URL}/images/painting_timessquare.JPG`} className="wrap-right" alt="Times Square" />
              Lively streets of Times Square in New York City.
        </div>
      </div>
      <div className="interest-category">
        <h2>Sports</h2>
        <p>
          In my free time, I like to get out of the house and stay active. Growing up, I played more sports than my fingers could count.
          Currently, I love playing golf with buddies and pickleball with my family and friends.
        </p>
        <img src={`${process.env.PUBLIC_URL}/images/football.jpg`} className="full-picture" alt="Giants Cowboys NFL" />
        <p>
          I watch a lot of sports as well. Out of all the sports I watch, I enjoy football the most. I am a huge Cowboys fan and I watch every single game. Here is a NFL game
          that I went to watch live recently when the Cowboys beat the Giants away at Metlife Stadium. The atmosphere was electric and the turnout of more Cowboys fans than Giants fans goes
          to show how strong the Cowboys fanbase is.
        </p>
        <p>
          <img src={`${process.env.PUBLIC_URL}/images/golf.jpg`} className="wrap-left" alt="Golf with friends" />
          Golf is a sport that I picked up in college and I regret not playing more when I was younger. I think golf wasn't as appreciated as much before as it is now due to the pandemic.
          The pandemic garnered a lot of interest and fans in golf due to the social distancing restrictions.
          The sport is definitely one of the hardest mentally and physically but I love the challenge of the game and the beautiful golf courses that I get to play on.
          Here is a picture taken at Turf Valley Resort Course back home where I played with my friends over the summer.
          <p>
            <img src={`${process.env.PUBLIC_URL}/images/surgery.JPG`} className="custom-shoulder" alt="Post Shoulder Surgery" />
            I tried pickleball for the first time during the pandemic and played very casually. It is a fun and social sport that has a great community.
            I made a lot of friends playing in New York since moving just from playing in local parks and courts.

            I really started to take pickleball more seriously after I
            dislocated my shoulder and tore my labrum playing basketball while playing a pickup game at BU. I ended up getting surgery and rehabbing my shoulder for 6 months.
            During that time I had to be in a sling and couldn't really exercise or play golf with one arm.

          </p>
        </p>
        <p>
          Luckily, I am right handed so I picked up my pickleball paddle and started
          to play everyday to stay in shape while I recovered. Since recovering, I continued to play daily and tried to increase my skill level by playing in competitive tournaments.

        </p>
        <img src={`${process.env.PUBLIC_URL}/images/pickleball_tournament.jpg`} className="full-picture" alt="Pickleball Moneyball Tournament" />
      </div>
      <div className="interest-category">
        <h2>Traveling</h2>
        <p>Since graduating college and getting a job. I made it my passion to Travel. I enjoy exploring new cultures, trying different cuisines, and sightseeing.
          I love eating food so I always bring my vlogging camera to document my food adventures. My top cuisines are Japanese, Italian, thai, and Mexican. Here are some places that I have
          traveled to in the past year.
        </p>
        <div className="image-container">
          <div className="image-item">
            <img src={`${process.env.PUBLIC_URL}/images/Quebec.JPG`} alt="Quebec Hotspring" />
            <div className="image-caption">Quebec Nordic Hotspring Spa</div>
          </div>
          <div className="image-item">
            <img src={`${process.env.PUBLIC_URL}/images/Diamondhead_trail.jpg`} alt="Hawaii Diamondhead" />
            <div className="image-caption">O'ahu, Hawaii Diamondhead Trail Hike</div>
          </div>
          <div className="image-item">
            <img src={`${process.env.PUBLIC_URL}/images/puerto_rico.jpg`} alt="San Juan" />
            <div className="image-caption">San Juan, Puerto Rico</div>
          </div>
          <div className="image-item">
            <img src={`${process.env.PUBLIC_URL}/images/Taiwan.jpg`} alt="Taiwan" />
            <div className="image-caption">Long Dong Lookout in Taiwan</div>
          </div>
        </div>
        <p>
          I also love listening to music and going to concerts. I have been to a lot of concerts and music festivals in the past. I love all types of music but my favorite genres are EDM, pop, and rap.
          This is the most recent festival called Gov Ball in NYC where I saw Post Malone and SZA perform live. The energy and vibes were amazing and I can't wait to go to more festivals in the future.
        </p>
        <div className="festival-container">
          <img src={`${process.env.PUBLIC_URL}/images/festival.PNG`} className="festival" alt="festival" />
        </div>
      </div>
      <ScrollButton />
    </div>
  );
};

export default Interests;