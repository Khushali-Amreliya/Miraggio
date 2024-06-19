import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiAction } from '../Store/Slice/CartSliceUi'
import CartsItems from './CartsItems'
import { Link } from 'react-router-dom'

const Carts = () => {
    const dispatch = useDispatch()
    const cartToggle = () => {
        dispatch(cartUiAction.toggle())
    }
    const CartItems = useSelector(state => state.cart.cartItems)
    const TotalAmount = useSelector(state => state.cart.totalAmount)
    const CartItem = useSelector(state => state.cart.cartItems)
  return (
    <div className='cart-container'>
        <section className='cart position-fixed'>
            <div className='cart__close' onClick={cartToggle}>
                <span><i className='ri-close-fill'></i></span>
            </div>
            <div className='cart__item-list'>
                {
                    CartItem.length === 0 ? (
                        <h2 className='text-center ' style={{fontSize:"60px",marginTop:"200px"}}>
                            <i class="fa-solid fa-cart-shopping"></i></h2>
                        ) : 
                    (
                        CartItems.map((items) => {
                            return <CartsItems Productsitem={items}></CartsItems>
                        })
                    )
                }
            </div>
            <div className='cart__bottom d-flex align-items-center justify-content-between'>
                <h6 className='fw-bold' style={{fontSize:"18px"}}>Subtotal Amount: <span className='fw-bolder' style={{fontSize:"19px"}}>${TotalAmount}</span></h6>
                <button><Link to="/checkout">Checkout</Link></button>
            </div>
        </section>
    </div>
  )
}

export default Carts