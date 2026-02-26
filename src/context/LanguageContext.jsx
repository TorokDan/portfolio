import React, { createContext, useContext, useState } from 'react'
import en from '../data/content.en.json'
import hu from '../data/content.hu.json'

const languages = { en, hu }

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en')

  return (
    <LanguageContext.Provider value={{ content: languages[lang], lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
