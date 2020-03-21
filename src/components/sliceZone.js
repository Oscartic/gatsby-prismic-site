import React from 'react';
import Hero from './hero';
import CallToActionGrid from './CallToActionGrid';
import PriceList from './priceList';


const SliceZone = ({body}) => {
  return (
    <div>
      {body.map((bodyContent, i) =>{
        if(bodyContent.type === 'hero2'){
          return(
            <Hero 
              key={i} 
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image.url}
            />
          )
        }
        else if(bodyContent.type === 'call_to_action_grid2'){
          return(
            <CallToActionGrid
              key={i} 
              title={bodyContent.primary.section_title}
              callToActions={bodyContent.fields}
            />
          )
        }
        else if(bodyContent.type === 'price_list2'){
          return(
            <PriceList 
              key={i}
              title={bodyContent.primary.title}
              prices={bodyContent.fields}
            />
          )
        }
      })}
    </div>
  )
};

export default SliceZone;
