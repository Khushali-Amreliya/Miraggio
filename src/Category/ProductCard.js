import React from 'react'
import { Link } from 'react-router-dom'
import { cartAction } from '../Store/Slice/CartSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function ProductCard(props) {
  const { id, title, price, image01, image02, delprice, buyprice } = props.Productsitem

  const dispatch = useDispatch()
  const addToCart = async() => {
    dispatch(cartAction.addItem({
      id, title, price, image01
    }))
    await axios.post(`http://localhost:5000/api/cart`,{
      id, title, price, image01,image02
    }).then((res) => { console.log(res);
      // setProducts(res.data)
     }).catch((err) => console.log(err))
  }
  return (
    <div>
      <div className='card border-0'>
        <Link to={`/carddetails/${id}`}>
          <img alt='' src={image01} className='img1 img-fluid' />
        </Link>
        <Link to={`/carddetails/${id}`}>
          <img alt='' src={image02} className='img2 img-fluid' />
        </Link>
        <div className='card-body text-center'>
          <Link to={`/carddetails/${id}`} style={{ textDecoration: "none", color: "#1c1d1d" }}>
            <p className='card-p m-0 p-0'>{title}</p>
          </Link>
          <p className='card-p1 m-0 p-0 pt-3 pb-2'>
            <span className='fw-bolder'>&#8377;{price}</span>
            <span className='ps-1'><del>&#8377;{delprice}</del></span>
          </p>
          <h6 className='m-0 p-0'>BEST BUY at <span style={{ color: "#ff511b" }}>&#8377;{buyprice}</span> with coupon</h6>
        </div>
        <button type='button' className='text-light fw-bold border-0' style={{backgroundColor:"#000"}} onClick={addToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default ProductCard  