import React from 'react'
import Navbar from '../components/navbar'
import Services from './services'
import ContactUs from '../components/ContactUs'
import PhotoGallery from './photoGallery'

const main = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <ContactUs />
      <PhotoGallery />
      
    </div>
  )
}

export default main
// You need to import all the pages here.