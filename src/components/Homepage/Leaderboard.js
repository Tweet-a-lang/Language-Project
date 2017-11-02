import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
const leaderBoardStyle = {
  'borderRadius': '50%',

};


const LeaderboardUI = ({ data }) => (
  <table className="table is-hoverable is-fullwidth">
    <h2 className="subtitle is-3">Leaderboard</h2>
    <table className="table is-fullwidth">
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
                <Link to={`/user/${user.name}`}>
                  <img src={user.avatar} style={leaderBoardStyle} width='50' height='50' />
                </Link>
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
  </table>
);

LeaderboardUI.propTypes = {
  data: PT.array
};

export default LeaderboardUI;