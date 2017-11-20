import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
const leaderBoardStyle = {
  'borderRadius': '50%',

};
import '../../css/leaderboard.css';

const LeaderboardUI = ({ data }) => (
  <div className="leaderBoard">
    <h2 className="subtitle is-3">Leaderboard</h2>
    <table className="table is-hoverableis-fullwidth">
      <thead>
        <tr>
          <th>User</th>
          <th></th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => {
          return (
            <tr key={i}>

              <td key={user.avatar}
                className="userImage">
                <Link to={`/user/${user.name}`}>
                  <img src={user.avatar} style={leaderBoardStyle} width='50' height='50' />
                </Link>
              </td>
              <td>
                <Link to={`/user/${user.name}`}>
                  <h2 className="has-text-centered" key={user.name}>{user.name}</h2>
                </Link>
              </td>
      

              <td className="has-text-centered" key={user.name + user.score}>{user.score}</td>
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