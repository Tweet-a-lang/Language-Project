import React from 'react';
import { connect } from 'react-redux';
import fetchLeaderboard from '../../actions/fetchLeaderboard';
import PT from 'prop-types';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchLeaderboard();
  }
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

Leaderboard.propTypes = {
  fetchLeaderboard: PT.func
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