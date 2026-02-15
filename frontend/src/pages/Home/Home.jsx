import React from 'react'

import CarCarousel from '../../components/Crousel'
import ProductCards from '../../components/Cards'
import TopCategoryProducts from '../../components/TopCategoryProducts'
import StatsSection from '../../components/HappyClients'
import Services from '../../components/Services'
import FAQ from '../../components/Faqs'
import CustomerReviews from '../../components/Reviews'
import Contact from '../../components/Contact'

function Home() {
  return (
    <>
    
    <CarCarousel/>
    <Services/>
    <ProductCards/>
    <TopCategoryProducts/>
    <StatsSection/>
    <FAQ/>
    <CustomerReviews/>
    <Contact/>
    
    
    </>
  )
}

export default Home