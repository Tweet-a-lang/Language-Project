import React from 'react';

class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Language</th> 
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;