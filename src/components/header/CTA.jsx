import React from 'react'
import CV from '../../assets/cv.pdf'
import { useLanguage } from '../../context/LanguageContext'

const CTA = () => {
  const { content } = useLanguage()

  return (
    <div className='cta'>
      <a href={CV} download className='btn'>{content.ui.header.downloadCv}</a>
      <a href="#contact" className='btn btn-primary'>{content.ui.header.contactButton}</a>
    </div>
  )
}

export default CTA