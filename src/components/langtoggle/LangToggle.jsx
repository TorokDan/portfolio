import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './langtoggle.css'

const LangToggle = () => {
  const { lang, setLang } = useLanguage()

  return (
    <div className='lang__toggle'>
      <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
      <button onClick={() => setLang('hu')} className={lang === 'hu' ? 'active' : ''}>HU</button>
    </div>
  )
}

export default LangToggle
