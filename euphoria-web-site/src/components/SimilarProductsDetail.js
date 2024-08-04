import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productdetail.scss';

const SimilarProductsDetail = ({ products, currentProductId }) => {
  return (
    <div className='SimilarProductsDetail_block'>
      <div className="title-product">
        <img src="/img/Rectangle 21.png" alt="Rectangle" />
        <h2 className="section-title">Similar Products</h2>
      </div>
      <div className="similar-product-wrap">
        {products.slice(0, 8).map(product => (
          <div className="similar-product" key={product.id}>
            {product.id !== currentProductId ? (
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className="new-product-strela-naz">
                  <div>
                    <span className="similar-product-text1">{product.name}</span>
                    <br />
                    <span className="similar-product-text2">{product.brand}</span>
                  </div>
                  <div className="price">${product.price.toFixed(2)}</div>
                </div>
                <div className="overlay-icon"></div>
              </Link>
            ) : (
              <>
                <img src={product.image} alt={product.name} />
                <div className="new-product-strela-naz">
                  <div>
                    <span className="similar-product-text1">{product.name}</span>
                    <br />
                    <span className="similar-product-text2">{product.brand}</span>
                  </div>
                  <div className="price">${product.price.toFixed(2)}</div>
                </div>
                <div className="overlay-icon"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProductsDetail;