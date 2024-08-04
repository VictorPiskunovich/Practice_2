import React from 'react';
import '../styles/Sign_in_header.scss';


const Sign_in_header = ({setToken}) => {

    return (
      <header class="sing_in_header">
        <div class="container flex sign_in_header__container">
          <a class="euphoria_logo">
            <img src="/img/euphoria.svg" alt="logo"/>
          </a>
          <nav class="nav flex" title="Main navigation">
            <li class="list-reset nav__item"><select name="language" id="language-select" class="language_select nav__link nav__list">
              <option value="English (united States)">English</option>
              <option value="russian">Русский</option>
              <option value="spanish">Español</option>
            </select></li>
            <ul class="list-reset nav__list flex">
              <li class="nav__item"><button type="button" class="login_button nav__link roboto-regular">Login </button></li>
              <li class="nav__item"><button type="button" class="signup_button nav__link roboto-regular">Sing Up</button></li>
            </ul>
          </nav>
        </div>
      <hr class="divider" />
      </header>
    );
}

export default Sign_in_header