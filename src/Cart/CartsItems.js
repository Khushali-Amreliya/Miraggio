import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'

const CartsItems = (props) => {
    const { id, title,image01, price , totalprice, quantity } = props.Productsitem

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartAction.addItem({
        id , title, price, image01
        }))
    }
    const removeToCart = () => {
        dispatch(cartAction.removeItem({
            id , title, price, image01
        }))
    }
    const deleteItem = () => {
        dispatch(cartAction.deleteItem({
            id , title, price, image01
        }))
    }
  return (
    <>
        <section className='border-0 cart__item'>
            <div className='cart__item-info d-flex gap-2 ps-3'>
                <img src={image01} alt='' className='img-fluid h-25 w-25'></img>
                <div className='cart__product-info w-100 d-flex align-items-center justify-content-center justify-content-between gap-4 pt-2 ps-3'>
                    <div>
                        <h6 className='cart__product-title fw-bolder'>{title}</h6>
                        <div className='d-flex align-items-center justify-content-between increase__decrease-btn mt-4 w-75'>
                            <span className='increase__btn' onClick={addToCart}><i class="ri-add-line"></i></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='decrease__btn' onClick={removeToCart}><i class="ri-subtract-line"></i></span>
                        </div>
                        <p className='cart__product-price d-flex align-items-center pt-3'><span className='fw-bolder'>${totalprice}</span></p>

                    </div>
                    <span className='delete__btn pe-3' onClick={deleteItem}><i class="ri-close-circle-fill"></i></span>
                </div>
            </div>
        </section>
    </>
  )
}

export default CartsItems