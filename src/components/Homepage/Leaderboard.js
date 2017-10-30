import React from 'react';
import PT from 'prop-types';

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
              <td key={user.name}>{user.name}</td>
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