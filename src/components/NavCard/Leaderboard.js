import React from 'react';
import { connect } from 'react-redux';
import fetchLeaderboard from '../../actions/fetchLeaderboard';
import PT from 'prop-types';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // uncomment when have data from API
  // componentDidMount() {
  //   this.props.fetchLeaderboard();
  // }

  render() {
    return (
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
            {this.props.leaderboardData.map((user, i) => {
              return (
                <tr key={i}>
                  {console.log(user)}
                  <td key={user.name}>{user.name}</td>
                  <td key={user.name + user.score}>{user.score}</td>
                </tr>
              );
            })}            
          </tbody>
        </table>
      </div>
    );
  }
}

Leaderboard.propTypes = {
  fetchLeaderboard: PT.func,
  leaderboardData: PT.array
};

const mapStateToProps = (state) => {
  return {
    leaderboardData: state.leaderboardReducer.leaderboardData,
    loading: state.leaderboardReducer.loading,
    error: state.leaderboardReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLeaderboard: () => {
      dispatch(fetchLeaderboard());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);