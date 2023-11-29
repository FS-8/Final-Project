// actions/userActions.js
import axios from "axios";

export const loadUserData = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      dispatch(loadUserDataSuccess(response.data));
    } catch (error) {
      dispatch(loadUserDataFailure(error));
    }
  };
};

const loadUserDataSuccess = (userData) => ({
  type: "LOAD_USER_DATA_SUCCESS",
  payload: userData,
});

const loadUserDataFailure = (error) => ({
  type: "LOAD_USER_DATA_FAILURE",
  payload: error,
});
