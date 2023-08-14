import React from 'react'
import "../home/Home.scss"
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Featured } from '../../components/featured/Featured'
import { PropertyList } from '../../components/propertyList/PropertyList'
import { FeaturedProperty } from '../../components/featuredProperties/FeaturedProperty'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className='homeTitle'>Browse by property type</h1>
            <PropertyList/>
            <h1 className='homeTitle'>Home guests love</h1>
            <FeaturedProperty/>
            <MailList/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home; 
 