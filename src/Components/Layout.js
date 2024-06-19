import React from 'react'
import Header from './Header'
import Router from '../Router'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import Carts from '../Cart/Carts'

function Layout() {
  const Cart = useSelector(state => state.cartUi.cartVisible)
  return (
    <div>
      {
        Cart === true ? <Carts></Carts> : null
      }
        <Header></Header>
        <div>
            <Router></Router>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout