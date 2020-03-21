import React from 'react';
import RichText from './richText'; 
import styled from 'styled-components';
import { Link } from 'gatsby';

const CaLLToActionBlockWrapper = styled.section`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 20px 0;
  .call-to-action-content{
    display: flex;
    .featured-image-wrapper {
      margin: auto 10px;
      background: white;
      padding: 10px;
      border-radius: 10px;
    }
    img {
      max-width: 100px;
    }
  }
`;

const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  a{
    color: white;
    display: block;
    padding: 4px 8px;
    text-decoration: none;
  }
`;

const CallToActionBlock = ({ title, content, buttonLabel, buttonDestination, featuredImage }) => {
  return (
    <CaLLToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <RichText render={content} />  
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="Featured" />
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>{buttonLabel}</Link>
      </Button>
    </CaLLToActionBlockWrapper> 
  );
}
 
export default CallToActionBlock;