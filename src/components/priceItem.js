import React from 'react';
import RichText from './richText'; 
import styled from 'styled-components';

const PriceItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 10px;
  background: ${p => p.mostPopular ? 'orange' : '#eee' };
  color: ${p => p.mostPopular ? 'white' : 'black' };
  padding: 10px;
  position: relative; 

  .most-popular {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    background-color: green;
    color: white;
    font-weight: bold; 
    font-size: 0.8em;
  }
  .price {
    font-size: 1.6em;
    background-color: rgba(0,0,0,.2);
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
    text-align: center;
    .duration { 
      font-size: 0.8em;
    }
  }
  .description {
    margin-top: 20px;
  }
`;

const PriceItem = ({ title, price, description, mostPopular }) => {
  return ( 
    <PriceItemWrapper mostPopular={mostPopular}> 
      { !!mostPopular && 
        <div className="most-popular">
          Most Popular
        </div>
      }
      <RichText render={title} />
      <div className="price">
        ${price} <span className="duration">/ month</span>
      </div>
      <div className="description">
        <RichText render={description}/>
      </div>
    </PriceItemWrapper>
  );
}
 
export default PriceItem;