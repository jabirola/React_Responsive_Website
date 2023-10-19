import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Sign_up from './components/sign_up/Sign_up'
import Price from './components/price/Price'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Body />
      <Sign_up />
      <Price />
      <Footer />
    </div>
  )
}

export default App