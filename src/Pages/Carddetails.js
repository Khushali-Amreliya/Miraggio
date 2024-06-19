import React, { useEffect, useState } from 'react'
import Helmet from '../Components/Helmet'
import products from '../fakedata/Products'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice'

const Carddetails = () => {
    const { id } = useParams()
    const Product = products.find(item => item.id === id)
    const { title , price , category , image01 , image02 , image03,image04 } = Product

    const [preImage , setPreImage] = useState(image01)

    useEffect(() => {
        setPreImage(image01)
        window.scrollTo(0,0)
    },[])

    const dispatch = useDispatch()
    const addToCart = () => {
    // alert("Hello")
    dispatch(cartAction.addItem({
      id , title, price, image01
    }))
  }
  return (
    <Helmet title={title}>
        <>
        <section className='container mt-5'>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-6'>
                    <div>
                        <div className='mb-2' onClick={() => setPreImage(image01)}>
                            <img alt='' src={image01} className='img-fluid w-50'></img>
                        </div>
                        <div className='mb-2' onClick={() => setPreImage(image02)}>
                            <img alt='' src={image02} className='img-fluid w-50'></img>
                        </div>
                        <div className='mb-2' onClick={() => setPreImage(image03)}>
                            <img alt='' src={image03} className='img-fluid w-50'></img>
                        </div>
                        <div className='mb-2' onClick={() => setPreImage(image04)}>
                            <img alt='' src={image04} className='img-fluid w-50'></img>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <img alt='' src={preImage} className='img-fluid w-100'></img>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-12 align-self-center d-flex ps-5'>
                    <div className='ms-5'>
                        <h2 className='fw-600'>{title}</h2>
                        <p className='m-0 p-0'><span className='fw-bolder fs-5'>Price:</span> <span>&nbsp;${price}</span></p>
                        <p><span className='fw-bolder fs-5'>Category:</span> <span className='p-1'>{category}</span></p>
                        <button className='px-5 mt-3 btn-dark text-light fw-bold border-0 px-5 py-2 w-100' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    </Helmet>
  )
}

export default Carddetails