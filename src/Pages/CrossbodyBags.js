// import React, { useEffect, useState } from 'react'
// import Helmet from '../Components/Helmet'
// import ProductCard from '../Category/ProductCard'
// import products from '../fakedata/Products'

// const CrossbodyBags = () => {
//   const [category] = useState("CROSSBODYBAGS")
//   const [sortOption, setSortOption] = useState('default');
//   const [allProduct, setAllproduct] = useState(products)

  // useEffect(() => {
  //   if (category === "CROSSBODYBAGS") {
  //     const Filterproduct = products.filter(item => item.category === "CrossbodyBag")
  //     setAllproduct(Filterproduct)
  //   }
  // }, [category])

//   const sortedProducts = [...allProduct].sort((a, b) => {
//     switch (sortOption) {
//       case '1':
//         return a.title.localeCompare(b.title);
//       case '2':
//         return b.title.localeCompare(a.title);
//       case '3':
//         return b.price - a.price;
//       case '4':
//         return a.price - b.price;
//       default:
//         return 0;
//     }
//   });
//   return (
//     <Helmet title="Crossbody-Bags">
//       <>
//         <section className='container-fluid m-0 p-0'>
//           <img alt='' src='assets/img/crossbodybags.webp' className='img-fluid'></img>
//         </section>
//         <section className='container-fluid px-5 py-5'>
//           <div className='row'>
//             <div className='col-lg-2'>
//               <div style={{ position: "sticky", top: "2px" }}>
//                 <div className="accordion accordion-flush" id="accordionExample">
//                   <div className="accordion-item">
//                     <h2 className="accordion-header" id="headingTwo">
//                       <button className="accordion-button collapsed collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                         <p>FEATURED</p>
//                       </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                       <div className="accordion-body">
//                         <select
//                           className="form-select border-0"
//                           onChange={(e) => setSortOption(e.target.value)}
//                         >
//                           <option value="default">Default</option>
//                           <option value="1">Alphabetically, A-Z</option>
//                           <option value="2">Alphabetically, Z-A</option>
//                           <option value="3">High Price</option>
//                           <option value="4">Low Price</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='col-lg-10'>
//               <div className='row'>
//                 {
//                   sortedProducts.map((item) => (
//                     <div className='col-lg-4 col-md-6 col-sm-12 col-12 my-2 pb-2' key={item.id}>
//                       <ProductCard
//                         Productsitem={item}
//                       />
//                     </div>
//                   ))
//                 }
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     </Helmet>
//   )
// }

// export default CrossbodyBags

import React, { useEffect, useState } from 'react';
import Helmet from '../Components/Helmet';
import products from '../fakedata/Products';
import ProductCard from '../Category/ProductCard';

function CrossbodyBags() {
  const [category] = useState("CROSSBODYBAGS");
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    if (category === "CROSSBODYBAGS") {
      const Filterproduct = products.filter(item => item.category === "CrossbodyBag")
      setAllProduct(Filterproduct)
    }
  }, [category])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = allProduct.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case '1':
        return a.title.localeCompare(b.title);
      case '2':
        return b.title.localeCompare(a.title);
      case '3':
        return b.price - a.price;
      case '4':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <Helmet title="Crossbody-Bags">
      <>
        <section className='container-fluid m-0 p-0'>
          <img alt='' src='assets/img/crossbodybags.webp' className='img-fluid'></img>
        </section>
        <section className='pt-5 px-3'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-12 mb-3'>
                <div style={{ width: "35%" }} className='menu_width'>
                  <div className="input-group flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="I'm looking for...."
                      aria-label="Search"
                      aria-describedby="addon-wrapping"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <span className="material-symbols-outlined input-group-text bg-light text-dark fw-bolder" id="addon-wrapping"><i className="ri-search-line"></i></span>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end'>
                <div style={{ width: "35%" }} className='menu_width'>
                  <select
                    className="form-select"
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="1">Alphabetically, A-Z</option>
                    <option value="2">Alphabetically, Z-A</option>
                    <option value="3">High Price</option>
                    <option value="4">Low Price</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container-fluid px-3'>
            <div className='row px-3'>
              {
                sortedProducts.map((item) => (
                  <div className='col-lg-3 col-md-6 col-sm-12 col-12 my-3' key={item.id}>
                    <ProductCard
                      Productsitem={item}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </>
    </Helmet>
  );
}

export default CrossbodyBags;