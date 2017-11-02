import React from 'react';
import '../css/footer.css';
import _ from 'underscore';

const Footer = () => {
  const names = [
    {
      name: 'Dennis Foster',
      gitHub: 'https://github.com/Sinnedennis'
    },
    {
      name: 'Rosie Armstrong',
      gitHub: 'https://github.com/rosiearms'
    },
    {
      name: 'Kerry Godsmark',
      gitHub: 'https://github.com/kgodsmark'
    },
    {
      name: 'Olie Chan',
      gitHub: 'https://github.com/ochan7'
    },
  ];
  const randomOrderNames = _.sample([0, 1, 2, 3], 4).map((nameIndex, i) => {
    if (i === 3) {
      return (
        <a href={names[nameIndex].gitHub} key={i}>and {names[nameIndex].name} </a>
      );
    }
    return (
      <a href={names[nameIndex].gitHub} key={i}> {names[nameIndex].name}, </a>
    );
  });

  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>Created by: {randomOrderNames}</p>
      <p className='copyright'>© Tweetalang {currentYear}</p>
    </div>
  );
};

export default Footer;

