import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: [
    {
      _id: '',
      __v: 0,
      tweet: {
        created_at: '',
        id: 0,
        text: '',
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: '',
              expanded_url: '',
              display_url: '',
              indices: [0]
            }
          ]
        },
        user_screen_name: '',
        user_profile_image: '',
        topic: ''
      },
      answers: {
        chosenWord: '',
        translatedWord: '',
        choices: [
          {
            text: '',
            result: false
          },
          {
            text: '',
            result: false
          },
          {
            text: '',
            result: false
          },
          {
            text: '',
            result: false
          }
        ],
        hints: [
          'sorry definitions are unavailable for this word'
        ]
      }
    }
  ]


};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_TWEETS_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      data: []
    });
  case types.FETCH_TWEETS_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_TWEETS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};