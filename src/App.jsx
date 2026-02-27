import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Jobs from './components/jobs/Jobs'
import Learnings from './components/learnings/Learnings'

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <Nav />
      <About />
      <Jobs />
      <Experience />
      <Learnings />
      <Contact />
    </LanguageProvider>
  )
}

export default App
