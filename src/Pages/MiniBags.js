import React, { useEffect, useState } from 'react';
import Helmet from '../Components/Helmet';
import products from '../fakedata/Products';
import ProductCard from '../Category/ProductCard';

function MiniBags() {
  const [category] = useState("MINIBAG");
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    if (category === "MINIBAG") {
      const FilterProduct = products.filter(item => item.category === "MiniBag");
      setAllProduct(FilterProduct);
    }
  }, [category]);

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
    <Helmet title="Mini-Bags">
      <>
        <section className='container-fluid m-0 p-0'>
          <img alt='' src='assets/img/MINI_BAGS.webp' className='img-fluid'></img>
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

export default MiniBags;