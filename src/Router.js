import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mirragio from './Pages/Mirragio'
import BestSeller from './Pages/BestSeller'
import Collection from './Pages/Collection'
import HandBags from './Pages/HandBags'
import Curated from './Pages/Curated'
import Editorial from './Pages/Editorial'
import Carddetails from './Pages/Carddetails'
import CrossbodyBags from './Pages/CrossbodyBags'
import ShoulderBags from './Pages/ShoulderBags'
import ToteBags from './Pages/ToteBags'
import MiniBags from './Pages/MiniBags'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'

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
            <Route path='/curated' element={<Curated></Curated>}></Route>
            <Route path='/editorial' element={<Editorial></Editorial>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='/carddetails/:id' element={<Carddetails></Carddetails>}></Route>
        </Routes>
    </div>
  )
}

export default Router