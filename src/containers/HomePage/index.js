import React from 'react'
import { ServiceSection, CaseStudySection, Footer, TrustedBrandsSection, HeroSection, TopNavigation } from '../../components';

function HomePage() {
  console.log('show me');
  return (
    <>
      <TopNavigation />
      <HeroSection />
      <ServiceSection />
      <CaseStudySection />
      <TrustedBrandsSection />
      <Footer />
    </>
  )
}

export default HomePage