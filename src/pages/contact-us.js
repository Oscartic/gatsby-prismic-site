import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/richText';

export const query = graphql`
  query {
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_description
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
`;

const ContactUsWrapper = styled.section`
  max-width: 800px;
  margin: auto;
`;

const Form = styled.form`
  padding: 10px;
  background-color: #eee;
  margin: 20px auto ;
  max-width: 800px;

  input {
    margin-bottom: 10px;
    border-radius: 5px;
    height: 40px;
    border: 1px solid #eee; 
    width: 100%;
  }
  textarea {
    margin-bottom: 10px;
    border-radius: 5px;
    height: 100px;
    border: 1px solid #eee; 
    width: 100%;
    resize: none ;
  }
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 5px; 
`;

const ContactUs = (props) => {
  return ( 
    <Layout>
      <ContactUsWrapper>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_title} />
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_description} />
        <Form
          name="contact-us"
          method="POST"
          date-netlify="true" 
          action="/contact-success"
        >
          <input type="hidden" name="form-name" value="contact-us" />
          {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
            if(field.field_type === 'textarea'){
              return(
                <div key={i}>
                  <textarea 
                    required={field.required === 'yes'}
                    placeholder={field.field_name} 
                  />
                </div>
              )
            } else {
              return(
                <div key={i}>
                  <input 
                    type={field.field_type} 
                    required={field.required === 'yes'}
                    placeholder={field.field_name}   
                  />
                </div>
              )
            }
          })} 
          <Button type='submit'>
            Submit 
          </Button>
        </Form>
      </ContactUsWrapper>
    </Layout>
   );
}
 
export default ContactUs;