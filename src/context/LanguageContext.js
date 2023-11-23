import { createContext, useReducer } from "react";
import languageReducer from "./LanguageReducer";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  const initialState = {
    language: localStorage.getItem('language') || 'en',
    loading: 'false'
  }

  const [state, dispatch] = useReducer(languageReducer, initialState);

  // Change language setting
  const setLanguage = (language) => {
    setLoading();

    dispatch({
      type: 'UPDATE_LANGUAGE',
      payload: language
    });

    localStorage.setItem('language', language);
  }

  const setLoading = () => dispatch({
    type: 'SET_LOADING'
  });

  return <LanguageContext.Provider value={{
    language: state.language,
    loading: state.loading,
    setLanguage
  }}>
    {children}
  </LanguageContext.Provider>
}

export default LanguageContext;