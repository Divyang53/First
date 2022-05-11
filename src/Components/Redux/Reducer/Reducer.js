const initialState = {
  getRegistration: "",
  getLogindetails:""
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getRegistration":
      return {
        ...state,
        getRegistration: action.payload,
    };
    case "getLogindetails":
        return{
            ...state,
            getLogindetails: action.payload,
        }

      default:
      return state;
  }
};

export default registrationReducer;
