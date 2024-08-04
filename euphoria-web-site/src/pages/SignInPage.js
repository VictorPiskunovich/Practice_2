// src/pages/SignInPage.js
import React, {useState} from 'react';
import Sign_in_header from '../components/Sign_in_header';
import Sign_in_page from '../components/Sign_in_page';

const SignInPage = ({token, setToken}) => {
  return (
    <div>
      <Sign_in_header />
      <Sign_in_page token={token} setToken={setToken}/>
    </div>
  );
};

export default SignInPage;