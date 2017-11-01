import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';


class UserVocab extends React.Component {
  render() {
    return (
      <div>
        <h3>My Vocab</h3>
        <table>
          <thead>
            <tr>
              <th>Spanish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {(!this.props.vocab)? '' : this.props.vocab.map((wordPair, i) => {
              return (
                <tr key={i}>
                  <td key={wordPair.Spanish}>{wordPair.Spanish}</td>
                  <td key={wordPair.English}>{wordPair.English}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

  }
}

UserVocab.propTypes = {
  vocab: PT.array
};


const mapStateToProps = (state) => {
  return {
    vocab: state.userReducer.userData.vocab
  };
};


export default connect(mapStateToProps)(UserVocab);