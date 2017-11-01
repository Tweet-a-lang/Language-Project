import React from 'react';
import PT from 'prop-types';
import {Link} from 'react-router-dom';
const leaderBoardStyle = {
  'borderRadius': '50%',
  
};


const LeaderboardUI = ({data}) => (
  <div>
    <h3>Leaderboard</h3>
    <table>
      <thead>
        <tr>
          <th>UserName</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => {
          return (
            <tr key={i}>
              <td key={user.avatar}>
                <Link to ={ `/user/${user.name}`}>
                  <img src={user.avatar} style={leaderBoardStyle} width='50' height='50'/>
                </Link>
              </td>
              <Link to ={ `/user/${user.name}`}>
                <td key={user.name}>{user.name}</td>
              </Link>
              <td key={user.name + user.score}>{user.score}</td>
            </tr>
          );
        })}            
      </tbody>
    </table>
  </div>
);

LeaderboardUI.propTypes = {
  data: PT.array
};

export default LeaderboardUI;