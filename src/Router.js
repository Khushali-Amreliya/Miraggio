import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mirragio from './Pages/Mirragio'
import BestSeller from './Pages/BestSeller'
import Collection from './Pages/Collection'
import HandBags from './Pages/HandBags'
import Editorial from './Pages/Editorial'
import Carddetails from './Pages/Carddetails'
import CrossbodyBags from './Pages/CrossbodyBags'
import ShoulderBags from './Pages/ShoulderBags'
import ToteBags from './Pages/ToteBags'
import MiniBags from './Pages/MiniBags'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Login from './Pages/Login'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mirragio></Mirragio>}></Route>
        <Route path='/seller' element={<BestSeller></BestSeller>}></Route>
        <Route path='/collection' element={<Collection></Collection>}></Route>
        <Route path='/handbags' element={<HandBags></HandBags>}></Route>
        <Route path='/crossbody' element={<CrossbodyBags></CrossbodyBags>}></Route>
        <Route path='/shoulder' element={<ShoulderBags></ShoulderBags>}></Route>
        <Route path='/tote' element={<ToteBags></ToteBags>}></Route>
        <Route path='/mini' element={<MiniBags></MiniBags>}></Route>
        <Route path='/editorial' element={<Editorial></Editorial>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/carddetails/:id' element={<Carddetails></Carddetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default Router


// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Mirragio from './Pages/Mirragio';
// import BestSeller from './Pages/BestSeller';
// import Collection from './Pages/Collection';
// import HandBags from './Pages/HandBags';
// import Editorial from './Pages/Editorial';
// import Carddetails from './Pages/Carddetails';
// import CrossbodyBags from './Pages/CrossbodyBags';
// import ShoulderBags from './Pages/ShoulderBags';
// import ToteBags from './Pages/ToteBags';
// import MiniBags from './Pages/MiniBags';
// import Cart from './Pages/Cart';
// import Checkout from './Pages/Checkout';
// import Login from './Pages/Login';

// const Router = ({ isAuthenticated, setIsAuthenticated }) => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path='/' element={isAuthenticated ? <Mirragio /> : <Navigate to="/login" />} />
//         <Route path='/seller' element={isAuthenticated ? <BestSeller /> : <Navigate to="/login" />} />
//         <Route path='/collection' element={isAuthenticated ? <Collection /> : <Navigate to="/login" />} />
//         <Route path='/handbags' element={isAuthenticated ? <HandBags /> : <Navigate to="/login" />} />
//         <Route path='/crossbody' element={isAuthenticated ? <CrossbodyBags /> : <Navigate to="/login" />} />
//         <Route path='/shoulder' element={isAuthenticated ? <ShoulderBags /> : <Navigate to="/login" />} />
//         <Route path='/tote' element={isAuthenticated ? <ToteBags /> : <Navigate to="/login" />} />
//         <Route path='/mini' element={isAuthenticated ? <MiniBags /> : <Navigate to="/login" />} />
//         <Route path='/editorial' element={isAuthenticated ? <Editorial /> : <Navigate to="/login" />} />
//         <Route path='/cart' element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
//         <Route path='/checkout' element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
//         <Route path='/carddetails/:id' element={isAuthenticated ? <Carddetails /> : <Navigate to="/login" />} />
//       </Routes>
//     </div>
//   );
// };

// export default Router;
