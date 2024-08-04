import React from 'react';
import '../styles/productdetail.scss'; // Подключите ваши стили

const ProductDetail = ({ product }) => {
  return (
    <main>
      <div className="product-container">
        <div className="product-thumbnails-frame">
          <div className="product-thumbnails">
            <img src="/img/1.png" alt="Thumbnail 1" className="product-thumbnail" />
            <img src="/img/2.png" alt="Thumbnail 2" className="product-thumbnail" />
            <img src="/img/3.png" alt="Thumbnail 3" className="product-thumbnail" />
          </div>
          <div className="thumbnail-navigation">
            <img src="/img/up.png" alt="up" className="up-button" />
            <img src="/img/down.png" alt="down" className="down-button" />
          </div>
        </div>
        <img src="/img/image1.png" alt="Товар" className="product-image" />
        <div className="product-info">
          <div className="product-navigation">
            <span>Shop</span>
            <img src="/img/left.png" alt="left" />
            <span>Women</span>
            <img src="/img/left.png" alt="left" />
            <span>Top</span>
          </div>
          <div className="product-title1">Raven Hoodie With</div>
          <div className="product-title2">Black colored Design</div>
          <div className="product-rating-comments">
            <div className="product-rating"><img src="/img/Star.png" alt="Star" /></div>
            <div className="product-rating"><img src="/img/Star.png" alt="Star" /></div>
            <div className="product-rating"><img src="/img/Star.png" alt="Star" /></div>
            <div className="product-rating"><img src="/img/Star.png" alt="Star" /></div>
            <div className="product-rating"><img src="/img/Star.png" alt="Star" /></div>
            <div className="product-number">3.5</div>
            <div className="product-comments"><img src="/img/comment.png" alt="Comment" /></div>
            <div className="product-comments">120 comment</div>
          </div>
          <div className="product-size-frame">
            <div className="product-size-menu">
              <div className="select-size">Select Size</div>
              <div className="size-guide">Size Guide</div>
              <img src="/img/arrow.png" alt="Arrow" />
            </div>
            <div className="product-sizes">
              <div className="product-size"><img src="/img/xs.png" alt="XS" /></div>
              <div className="product-size"><img src="/img/s.png" alt="S" /></div>
              <div className="product-size"><img src="/img/m.png" alt="M" /></div>
              <div className="product-size"><img src="/img/l.png" alt="L" /></div>
              <div className="product-size"><img src="/img/xl.png" alt="XL" /></div>
            </div>
          </div>
          <div className="product-color-frame">
            <span>Colours Available</span>
            <div className="product-colors">
              <div className="product-color"><img src="/img/c1.png" alt="Color 1" /></div>
              <div className="product-color"><img src="/img/c2.png" alt="Color 2" /></div>
              <div className="product-color"><img src="/img/c3.png" alt="Color 3" /></div>
              <div className="product-color"><img src="/img/c4.png" alt="Color 4" /></div>
            </div>
          </div>
          <div className="product-buttons">
            <div className="product-add-to-cart"><img src="/img/b1.png" alt="Add to Cart" /></div>
            <div className="product-price"><img src="/img/b2.png" alt="Price" /></div>
          </div>
          <img src="/img/Line 1.png" alt="line" className="line1" />
          <div className="details-container">
            <div className="product-details">
              <img src="/img/secure.png" alt="Secure" />
              <p>Secure payment</p>
            </div>
            <div className="product-details">
              <img src="/img/size.png" alt="Size" />
              <p>Size & Fit</p>
            </div>
            <div className="product-details">
              <img src="/img/shipping.png" alt="Shipping" />
              <p>Free shipping</p>
            </div>
            <div className="product-details">
              <img src="/img/returns.png" alt="Returns" />
              <p>Free Shipping & Returns</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;