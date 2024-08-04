// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';
import ProductDescription from '../components/ProductDescription';
import SimilarProductsDetail from '../components/SimilarProductsDetail';
import products from '../data/products'; // Импортируйте массив продуктов
import '../styles/productdetail.scss';

const ProductDetailPage = () => {
  const { productId } = useParams();

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <ProductDetail product={product} />
      <ProductDescription product={product} />
      <SimilarProductsDetail products={products} currentProductId={product.id} />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;