import React from 'react';
import '../styles/productdetail.scss'; // Подключите ваши стили

const ProductDescription = () => {
  return (
    <div>
      <div className="title-product">
        <img src="/img/Rectangle 21.png" alt="Rectangle" />
        <h2 className="section-title">Product Description</h2>
      </div>
      <div className="product-description">
        <div className="frame1">
          <div className="sections">
            <div className="section-main">
              <h2>Description</h2>
            </div>
            <div className="section">
              <h2>User comments</h2>
              <img src="/img/comments.png" alt="Comments" />
            </div>
            <div className="section">
              <h2>Question & Answer</h2>
              <img src="/img/question.png" alt="Question" />
            </div>
          </div>
          <div className="description">
            <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
          </div>
        </div>
        <div className='flex'>
          <div className="frame2">
            <img src="/img/tabel.png" alt="Table" />
          </div>
          <div className="frame3">
            <img src="/img/video.png" alt="Video" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDescription;