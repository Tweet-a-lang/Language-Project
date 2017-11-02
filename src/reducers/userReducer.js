import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  userData: {
    _id: 0,
    name: '',
    __v: 0,
    avatar: '',
    completedTweets: [],
    score: 0,
    vocab: []
  },
  gameData: {
    score: 0,
    completedTweets: [],
    vocab: [],
    topic: ''
  }
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_USER_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      userData: {}
    });
  case types.FETCH_USER_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      userData: action.payload
    });
  case types.FETCH_USER_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      userData: {}
    });
  case types.INCREASE_SCORE: {
    const newState = Object.assign({}, prevState);
    newState.gameData.score = prevState.gameData.score + action.payload;
    return newState;
  }
  case types.DECREASE_SCORE: {
    const newState = Object.assign({}, prevState);
    newState.gameData.score = prevState.gameData.score - action.payload;
    return newState;
  }
  case types.UPDATE_COMPLETED_TWEETS: {
    const newState = Object.assign({}, prevState);
    newState.gameData.completedTweets = prevState.gameData.completedTweets.concat(action.payload);
    return newState;
  }
  case types.UPDATE_VOCAB: {
    const newState = Object.assign({}, prevState);
    newState.gameData.vocab = prevState.gameData.vocab.concat(action.payload);
    return newState;
  }
  case types.SAVE_TOPIC: {
    const newState = Object.assign({}, prevState);
    newState.gameData.topic = action.payload;
    return newState;
  }
  case types.PATCH_USER_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      userData: prevState.userData,
      gameData: prevState.gameData
    });
  case types.PATCH_USER_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      userData: action.payload,
      gameData: {
        score: 0,
        completedTweets: [],
        vocab: [],
        topic: prevState.gameData.topic
      }
    });
  case types.PATCH_USER_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      userData: prevState.userData,
      gameData: prevState.gameData
    });
  case types.POST_NEW_USER_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      userData: prevState.userData
    });
  case types.POST_NEW_USER_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      userData: action.payload
    });
  case types.POST_NEW_USER_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      userData: prevState.userData
    });
  case types.FETCH_LEADERBOARD_SUCCESS:
    return Object.assign({}, prevState, {
      userData: {
        _id: 0,
        name: '',
        __v: 0,
        avatar: '',
        completedTweets: [],
        score: 0,
        vocab: []
      },
      gameData: {
        score: 0,
        completedTweets: [],
        vocab: [],
        topic: ''
      }
    });
  default:
    return prevState;
  }
};