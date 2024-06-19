import React, { useState } from 'react';
import Helmet from '../Components/Helmet';
import products from '../fakedata/Products';
import ProductCard from '../Category/ProductCard';

function BestSeller() {
  const [priceRange, setPriceRange] = useState([1499, 4000]);
  const [sortOption, setSortOption] = useState('default');

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setPriceRange([1499, parseInt(value)]);
  };

  const filteredProducts = products.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

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
    <Helmet title="Bestsellers">
      <>
        <section className='container-fluid m-0 p-0'>
          <img alt='' src='assets/img/Bestsellers-Desktop_copy_2.webp' className='img-fluid' />
        </section>
        <section className='my-5'>
          <div className='container-fluid px-3'>
            <div className='row'>
              <div className='col-lg-2'>
                <div style={{ position: "sticky", top: "20px" }}>
                  <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <p>PRICE</p>
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <label htmlFor="priceRange" className="form-label">Select Price Range</label>
                          <input type="range" className="form-range" id="priceRange" min="1499" max="4000" value={priceRange[1]} onChange={handleRangeChange} />
                          <p>${priceRange[0]} - ${priceRange[1]}</p>
                        </div>
                      </div>
                    </div>
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
                <div className='row px-5'>
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
          </div>
        </section>
      </>
    </Helmet>
  );
}

export default BestSeller;
