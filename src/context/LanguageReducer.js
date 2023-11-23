const LanguageReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        language: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}

export default LanguageReducer;