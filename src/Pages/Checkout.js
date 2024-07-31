import React from 'react'
import Helmet from '../Components/Helmet'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const TotalAmount = useSelector(state => state.cart.totalAmount)

    const shipping = 120
    const tAmount = TotalAmount + shipping
    return (
        <Helmet title="CheckOut">
            <div>
                <section className='container pt-4 pb-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <form>
                                <div>
                                    <h5 className='mb-4 fw-bold'>Fill up this Details</h5>
                                </div>
                                <div>
                                    <input type='text' placeholder='Enter Your Name' className='form-control border-0 border-bottom rounded-0 mb-3' required />
                                </div>
                                <div>
                                    <input type='email' placeholder='Enter Your Email' className='form-control border-0 border-bottom rounded-0 mb-3' required />
                                </div>
                                <div>
                                    <input type='number' placeholder='Phone Number' className='form-control border-0 border-bottom rounded-0 mb-3' required />
                                </div>
                                <div>
                                    <input type='text' placeholder='Country' className='form-control border-0 border-bottom rounded-0 mb-3' required />
                                </div>
                                <div>
                                    <input type='text' placeholder='City' className='form-control border-0 border-bottom rounded-0 mb-3' required />
                                </div>
                                <div>
                                    <input type='number' placeholder='Postal Code' className='form-control border-0 border-bottom rounded-0 mb-3' required />
                                </div>
                                <div>
                                    <button type='submit' className='paytm-btn'>Payment</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12 justify-content-center d-flex mt-5'>
                            <div>
                                <h6>
                                    <span className='fw-bolder fs-5'>Subtotal:</span> &nbsp;
                                    <span style={{ fontSize: "17px", color: "#1D6199" }} className='fw-bolder'>{TotalAmount}$ </span>
                                    CartTotalAmount
                                </h6>
                                <h6>
                                    <span className='fw-bolder fs-5'>Shipping:</span> &nbsp;
                                    <span style={{ fontSize: "17px", color: "#1D6199" }} className='fw-bolder'>{shipping}$ </span>
                                    ShippingCost
                                </h6>
                                <h5>
                                    <span className='fw-bolder fs-5'>Total:</span> &nbsp;
                                    <span style={{ fontSize: "18px", color: "#1D6199" }} className='fw-bolder'>{tAmount}$ </span>
                                    TotalAmount
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Helmet>
    )
}

export default Checkout