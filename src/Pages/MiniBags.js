import React, { useEffect, useState } from 'react'
import ProductCard from '../Category/ProductCard'
import Helmet from '../Components/Helmet'
import products from '../fakedata/Products'

const MiniBags = () => {
  const [category] = useState("MINIBAG")
  const [allProduct, setAllproduct] = useState(products)
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    if (category === "MINIBAG") {
      const Filterproduct = products.filter(item => item.category === "MiniBag")
      setAllproduct(Filterproduct)
    }
  }, [category])

  const sortedProducts = [...allProduct].sort((a, b) => {
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
    <Helmet title="Mini-Bags">
      <>
        <section className='container-fluid m-0 p-0'>
          <img alt='' src='assets/img/MINI_BAGS.webp' className='img-fluid'></img>
        </section>
        <section className='container-fluid px-5 py-5'>
          <div className='row'>
            <div className='col-lg-2'>
              <div style={{ position: "sticky", top: "2px" }}>
                <div className="accordion accordion-flush" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <p>FEATURED</p>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <select
                          className="form-select border-0"
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
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='row'>
                {
                  sortedProducts.map((item) => (
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 my-2 pb-2' key={item.id}>
                      <ProductCard
                        Productsitem={item}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </>
    </Helmet>
  )
}

export default MiniBags