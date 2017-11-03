import React from 'react';
class HowToPlay extends React.Component {
  render() {
    return (

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification">
                <p className="title">The real deal</p>
                <p className="subtitle">Tweet-a-lang is a fun way to practise your language skills. We use real tweets from native speakers so you can learn the language they really speak. </p>
              </article>
              <article className="tile is-child notification">
                <p className="title">Learn more than just language</p>
                <p className="subtitle">You can choose a topic and click on the links and articles they are tweeting about too, so if you are interested you can go and follow them on twitter.</p>
              </article>
              <article className="tile is-child notification">
                <p className="title">Grow your connections</p>
                <p className="subtitle">Tweet-a-lang will not only help you learn your desired language but also connect you with people from all over the world!</p>
              </article>
            </div>
            <div className="tile is-parent play">
              <article className="tile is-child notification">
                <p className="title">How to Play?</p>
                <p className="subtitle">
                  <ul className='playListUL'>
                    <li className='playList'>Login with your twitter handle and see your picture on our leaderboard! Or just make a username up and we will supply the picture :)</li>
                    <li className='playList'>Select a topic for the tweets you want to translate and hit start game!</li>
                    <li className='playList'>Every game starts with zero points, and 5 tweets. One word is highlighted in each tweet for you to translate.</li>
                    <li className='playList'>Every answer you guess correctly you will earn <strong>10 points</strong>!</li>
                    <li className='playList'>If you get stuck, you can spend some of your points on helpful hints.</li>
                    <li className='playList'>Once you have answered all 5 tweets, End Game to go back to your profile page, or Next Game to start another round.</li>
                    <li className='playList'>Your game points will be added to your overall score which you can see on your profile page. If you are one of the <strong>top 10 highest scorers</strong> you will be on our leaderboard.</li>
                  </ul>
                </p>
              </article>
            </div>
          </div>

        </div>

      </div>

    );
  }





}

export default HowToPlay;