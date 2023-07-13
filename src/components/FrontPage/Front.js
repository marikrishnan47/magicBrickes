import React from 'react'
import Header from '../Header/Header'
import Subhead from '../Header/Subhead'
import Search from '../Header/Search'
import Home from '../Home/Home'
import Product from '../Product/Product'
import Location from '../Location/Location'
import Footer from '../Footer/Footer'

const Front = () => {
  return (
    <div>
        <Header />
        <Subhead />
        <Search />
        <Home />
        <Product />
        <Location />
        <Footer />
    </div>
  )
}

export default Front