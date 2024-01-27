import React from 'react'
import Hero from "../containers/Hero"
import AppleProducts from '../containers/AppleProducts'
import IphoneAds from '../containers/IphoneAds'
import People from "../containers/People"
import Product from "../containers/ProductOverview"

const Mac = () => {
  return (
    <>
    <Hero/>
    <AppleProducts />
    <IphoneAds />
    <People />
    <Product />
    </>
  )
}

export default Mac