import {useRef} from 'react';

import ClinicalEngineeringSection from "./components/ClinicalEngineeringSection"
import CompanySection from "./components/CompanySection"
import ContactUsSection from "./components/ContactUsSection"
import { HeroSection } from "./components/HeroSection"
import { NavBar } from "./components/NavBar"
import PartnerSection from "./components/PartnersSection"
import ServicesSection from "./components/ServicesSection"

function App() {

  const companyRef = useRef(null)
  const clinicalEngineeringRef = useRef(null)
  const servicesRef = useRef(null)
  const partnerRef = useRef(null)
  const contactUsRef = useRef(null)

  const handleScrollToCompany = () => {
    companyRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleScrollToClinicalEngineering = () => {
    clinicalEngineeringRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleScrollToPartner = () => {
    partnerRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleScrollToContactUs = () => {
    contactUsRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <NavBar 
        onHandleScrollToCompany={handleScrollToCompany} 
        onHandleScrollToClinicalEngineering={handleScrollToClinicalEngineering}
        onHandleScrollToServices={handleScrollToServices}
        onHandleScrollToPartner={handleScrollToPartner}
        onHandleScrollToContactUs={handleScrollToContactUs}
      />
      <HeroSection onHandleScrollToContactUs={handleScrollToContactUs}/>
      <CompanySection ref={companyRef} /> 
      <ClinicalEngineeringSection ref={clinicalEngineeringRef}/> 
      <ServicesSection ref={servicesRef}/>
      <PartnerSection ref={partnerRef}/>
      <ContactUsSection ref={contactUsRef}/>
    </>
  )
}

export default App
