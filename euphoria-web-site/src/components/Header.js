import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/index.scss';

const Header = () => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.startsWith('/product/');

  return (
    <header>
      <div className="container">
        <div className="header">
          <h2 className='test'>fffffffffff</h2><img src="/img/euphoria.svg" alt="logo"/>
          <nav className="header-nav">
            <ul>
              <li className={`header-nav-item ${location.pathname === '/shop' ? 'active' : ''}`}><Link to="/shop">Shop</Link></li>
              <li className={`header-nav-item ${location.pathname === '/men' ? 'active' : ''}`}><Link to="/men">Men</Link></li>
              <li className={`header-nav-item ${location.pathname === '/women' || isProductDetailPage ? 'active' : ''}`}><Link to="/women">Women</Link></li>
              <li className={`header-nav-item ${location.pathname === '/combos' ? 'active' : ''}`}><Link to="/combos">Combos</Link></li>
              <li className={`header-nav-item ${location.pathname === '/joggers' ? 'active' : ''}`}><Link to="/joggers">Joggers</Link></li>
            </ul>
          </nav>
          <div class="d7">
              <form>
                
                <input type="text" placeholder="Search"/>
              </form>
              </div>
          <div className="header-user">
            <ul>
              <li className="header-user-item">
                <a href="#"><img src="/img/Component1.svg" class="header-user-item-img" width="44px" alt="Icon 1" /></a>
                </li>
              <li className="header-user-item">
                <a href="#"><img src="/img/Component 2.svg" class="header-user-item-img" width="44px" alt="Icon 2" /></a>
                </li>
              <li className="header-user-item">
                <a href="#"><img src="/img/Component 3.svg" class="header-user-item-img" width="44px" alt="Icon 3" /></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;