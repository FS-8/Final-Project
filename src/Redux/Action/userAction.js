import axios from "axios";

export const fetchUserSuccess = (user) => ({
  type: "FETCH_USER_SUCCESS",
  payload: user,
});

export const fetchUserById = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        // "http://localhost:3000/products/656445f127e00af45feb3cf7"
        `http://localhost:3000/users/${userId}`
      );
      dispatch(fetchUserSuccess(response));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};
