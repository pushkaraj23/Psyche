import React from 'react'
import Services from './services'
import ContactUs from '../components/ContactUs'
import PhotoGallery from './photoGallery'
import Home from './footer'
import LandingHeader from './footer'
import Footer from './footer'
import Home2 from './footer'

const main = () => {
  return (
    <div>
      <Services />
      <PhotoGallery />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default main
// You need to import all the pages here.