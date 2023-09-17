import { ActionType } from './action';

export const initialState = {
  data: {},
  loading: true,
  error: false,
};

function threadDetailReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.THREADS_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.THREADS_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionType.THREADS_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}

export default threadDetailReducer;
