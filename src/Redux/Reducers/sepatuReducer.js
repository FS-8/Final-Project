const initialValue = {
  shoes: [],
  isLoading: false,
  status: "all",
  user: [],
};

function sepatuReducer(state = initialValue, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        isLoading: true,
      };
    case "SUKSES":
      return {
        ...state,
        isLoading: false,
        shoes: action.payload,
      };
    case "SUK":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "DONE":
      return {
        ...state,
        isLoading: false,
        status: true,
      };
    case "AKTIF":
      return {
        ...state,
        isLoading: false,
        status: false,
      };
    case "ALL":
      return {
        ...state,
        isLoading: false,
        status: "all",
      };

    default:
      return state;
  }
}

export default sepatuReducer;
