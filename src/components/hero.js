import React from 'react';
import RichText from './richText'; 
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background: url('${props => props.backgroundImage}');
  height: calc(100vh - 66px);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  div {
    background: rgba(0,0,0,.5);
    color: white;
    max-width: 800px;
    margin: 0 auto;
  }
`;
const Hero = ({title, content, backgroundImage}) => {
  return ( 
    <HeroWrapper backgroundImage={backgroundImage}> 
      <div>
        <RichText render={title} />
        <p>
          {content}
        </p>
      </div>
    </HeroWrapper>
   );
}
 
export default Hero;