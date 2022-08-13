import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'

import heroSliderData from '../assets/fake-data/hero-slider'

function Home() {
  return (
    <Helmet title='Trang chủ'>
      {/* Hero Slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={3000}
      />
      {/* End Hero Slider */}
    </Helmet>
  )
}

export default Home