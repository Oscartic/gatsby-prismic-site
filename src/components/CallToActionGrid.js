import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs'; 
import CallToActionBlock from './callToActionBlock';

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

const CallToActionGrid = ({ title, callToActions }) => {
  console.log(callToActions)
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {callToActions.map((callToAction, i) => {
        return (
          <div key={i}>
            Call to action
          </div>
        )
      })}
    </CallToActionGridWrapper>
  );
}
 
export default CallToActionGrid;