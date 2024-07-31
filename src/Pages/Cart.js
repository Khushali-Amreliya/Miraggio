import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../Store/Slice/CartSlice';
import Helmet from '../Components/Helmet';
import { Link } from 'react-router-dom';

const Cart = () => {
    const CartItem = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(cartAction.deleteItem({
            id
        }))
    }
    return (
        <Helmet title="Cart">
            <div>
                <section className='container pt-3'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {
                                CartItem.length === 0 ? (<h3 className='text-center'>Your Cart Is Empty</h3>) :
                                    (
                                        <table className='table table-bordered text-center table-hover'>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Title</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    CartItem.map((item) => {
                                                        return <Tr Productsitem={item} key={item.id} delete={deleteItem}></Tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    )
                            }
                            <div className='d-flex align-items-center justify-content-between cart-subtotal pt-5'>
                                <h6>Subtotal amount: <span>${totalAmount}</span></h6>
                            </div>
                            <p className='text-muted pb-3'>Taxes and shipping will calculate at checkout</p>
                            <button className='cart-btn'><Link to="/seller">Continue  Shopping</Link></button>
                            <button className='ms-2 cart-btn'><Link to="/checkout">Checkout</Link></button>
                        </div>
                    </div>
                </section>
            </div>
        </Helmet>
    )
}

const Tr = (props) => {
    // console.log(props.Productsitem);
    const { image01, title, price, quantity, id } = props.Productsitem

    return (
        <tr>
            <td className='text-center'><img alt='' src={image01} className='img-fluid' style={{ width: "40px" }}></img></td>
            <td className='text-center'>{title}</td>
            <td className='text-center'>${price}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center' onClick={() => props.delete(id)}>
                <i className='ri-delete-bin-line'></i>
            </td>
        </tr>
    )
}


export default Cart