import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/Popular';
import Offers from '../components/Offers/Offers.jsx';
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewsLetter />
    </div>
  )
}

export default Shop;
