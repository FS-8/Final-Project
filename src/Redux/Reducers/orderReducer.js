// reducers/userReducer.js
const initialState = {
  userData: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER_DATA_SUCCESS":
      return {
        ...state,
        userData: action.payload.user,
        loading: false,
        error: null,
      };
    case "LOAD_USER_DATA_FAILURE":
      return {
        ...state,
        userData: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
