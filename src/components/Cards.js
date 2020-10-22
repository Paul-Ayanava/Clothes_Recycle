import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out How You Can Participate</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/prerecycled.jpg'
              text='Why throw away old clothes while you can donate or sell'
              label='Pre-Recycled section'
              path='/'
            />
            <CardItem
              src='images/postrecycled.jpg'
              text='Get the old clothes and recycle them. You can sell your recycled products in this platform!'
              label='Recycle Clothes'
              path='/'
            />
            <CardItem
              src='images/shop-online.jpg'
              text='Buy recycled clothes and save the nature'
              label='Buy products'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
