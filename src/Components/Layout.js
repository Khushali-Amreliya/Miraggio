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
            <Router />
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout

// import React, { useState } from 'react';
// import Header from './Header';
// import Router from '../Router';
// import Footer from './Footer';
// import { useSelector } from 'react-redux';
// import Carts from '../Cart/Carts';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from '../Pages/Login';

// function Layout() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const Cart = useSelector(state => state.cartUi.cartVisible);

//   return (
//     <div>
//       <Routes>
//         <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path='/*' element={
//           isAuthenticated ? (
//             <div>
//               {
//                 Cart === true ? <Carts></Carts> : null
//               }
//               <Header />
//               <div>
//                 <Router isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//               </div>
//               <Footer />
//             </div>
//           ) : (
//             <Navigate to="/login" />
//           )
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default Layout;