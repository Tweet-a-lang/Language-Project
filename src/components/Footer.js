import React from 'react';
import '../css/footer.css';
import _ from 'underscore';

const Footer = () => {
  const names = ['Dennis Foster', 'Rosie Armstrong', 'Kerry Godsmark', 'Olie Chan'];
  const randomOrderNames = _.sample([0,1,2,3], 4).map((name, i) => {
    if (i === 3) return 'and ' + names[name];
    return names[name];
  });

  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>Created by: {randomOrderNames.join(', ')}</p>
      <p className='copyright'>© Tweetalang {currentYear}</p>
    </div>
  );
};

export default Footer;