import React from 'react';

class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <table>
          <tr>
            <th>UserName</th>
            <th>Language</th> 
            <th>Score</th>
          </tr>
          <tr>
            <td>Kerry</td>
            <td>Spanish</td> 
            <td>50</td>
          </tr>
          <tr>
            <td>Rosie</td>
            <td>Spanish</td> 
            <td>100</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Leaderboard;