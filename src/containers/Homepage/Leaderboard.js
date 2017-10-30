import React from 'react';
import { connect } from 'react-redux';
import fetchLeaderboard from '../../actions/fetchLeaderboard';
import LoadingPage from '../../components/Errors/LoadingPage';
import LeaderboardUI from '../../components/Homepage/Leaderboard';
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
        {(this.props.loading) ? <LoadingPage /> : <LeaderboardUI 
          data={this.props.leaderboardData}
        /> }
      </div>
    );
  }
}

Leaderboard.propTypes = {
  fetchLeaderboard: PT.func,
  leaderboardData: PT.array,
  loading: PT.bool
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