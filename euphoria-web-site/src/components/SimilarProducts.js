import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss';

const SimilarProducts = ({ filters }) => {
  const products = [
    { id: 1, image: 'img/p1.png', name: 'Black Sweatshirt with...', brand: "Jhanvi’s  Brand", price: 123.00, categories: ['Tops', 'Sweatshirts'], color: 'Black', size: 'M', style: 'Casual' },
    { id: 2, image: 'img/p2.png', name: 'White T-shirt', brand: "Helen’s  Brand", price: 11.00, categories: ['Tops'], color: 'White', size: 'S', style: 'Casual' },
    { id: 3, image: 'img/p3.png', name: 'Levender Hoodie with...', brand: "Nike’s  Brand", price: 119.00, categories: ['Tops', 'Hoodies'], color: 'Purple', size: 'L', style: 'Sport' },
    { id: 4, image: 'img/p4.png', name: 'Leaves Pattern White...', brand: "paypal’s  Brand", price: 77.00, categories: ['Tops'], color: 'White', size: 'M', style: 'Elegant' },
    { id: 5, image: 'img/p5.png', name: 'White Graphic Crop Top', brand: "woden’s  Brand", price: 29.00, categories: ['Tops', 'Printed T-shirts'], color: 'White', size: 'S', style: 'Casual' },
    { id: 6, image: 'img/p6.png', name: 'Black Shorts', brand: "MM’s  Brand", price: 37.00, categories: ['Tops', 'Boxers'], color: 'Black', size: 'M', style: 'Sport' },
    { id: 7, image: 'img/p7.png', name: 'Barboreal Gray Sweats...', brand: "Priya’s  Brand", price: 77.00, categories: ['Tops', 'Sweatshirts'], color: 'Gray', size: 'L', style: 'Casual' },
    { id: 8, image: 'img/p8.png', name: 'Yellow Sweatshirt', brand: "woden’s  Brand", price: 29.00, categories: ['Tops', 'Sweatshirts'], color: 'Yellow', size: 'S', style: 'Casual' },
    { id: 9, image: 'img/p9.png', name: 'Flower Pattern Black C...', brand: "MM’s  Brand", price: 37.00, categories: ['Tops', 'Printed T-shirts'], color: 'Black', size: 'M', style: 'Elegant' },
    { id: 10, image: 'img/p10.png', name: 'I Don’t Graphic T-shirt', brand: "Nisargi’s  Brand", price: 77.00, categories: ['Tops', 'Printed T-shirts'], color: 'White', size: 'S', style: 'Casual' },
    { id: 11, image: 'img/p11.png', name: 'Blue Flower Print Crop...', brand: "Mellon’s  Brand", price: 29.00, categories: ['Tops'], color: 'Blue', size: 'M', style: 'Elegant' },
    { id: 12, image: 'img/p12.png', name: 'line Pattern Black H...', brand: "AS’s  Brand", price: 37.00, categories: ['Tops', 'Hoodies'], color: 'Black', size: 'L', style: 'Casual' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = filters?.categories?.length === 0 || (product.categories && product.categories.some(category => filters.categories.includes(category)));
    const matchesPrice = product.price >= filters?.price[0] && product.price <= filters?.price[1];
    const matchesColor = filters?.colors?.length === 0 || filters?.colors?.includes(product.color);
    const matchesSize = filters?.size?.length === 0 || filters?.size?.includes(product.size);
    const matchesStyle = filters?.style?.length === 0 || filters?.style?.includes(product.style);

    return matchesCategory && matchesPrice && matchesColor && matchesSize && matchesStyle;
  });

  return (
    <div>
      <div className="similar-product-wrapper">
        {filteredProducts.map(product => (
          <div className="similar-product" key={product.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;