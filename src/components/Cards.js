import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>GALERIA</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/14.jpg'
              text='LOREM LOREM LOREM LOREM'
              label='NOVOS MEMBROS'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='LOREM LOREMLOREM LOREM'
              label='FORMAÇÕES'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='LOREM LOREMLOREM LOREM'
              label='Workshop sobre pagamento das quotas'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='LOREM LOREMLOREM LOREMLOREM LOREM'
              label='SEMINARIO'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='LOREM LOREMLOREM LOREMLOREM LOREM'
              label='FORMAÇÕES'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
