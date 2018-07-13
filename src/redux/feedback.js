import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { errMess: null, feedback: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACKS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.FEEDBACKS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_FEEDBACK:
      var feedback = action.payload;
      return { ...state, feedback: state.feedback.concat(feedback) };

    default:
      return state;
  }
};
