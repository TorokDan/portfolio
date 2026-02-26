import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Learnings from './components/learnings/Learnings'
import Jobs from './components/jobs/Jobs'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Learnings />
      <Jobs />
      <Contact />
    </>
  )
}

export default App
