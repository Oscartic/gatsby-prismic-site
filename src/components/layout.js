/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link} from "gatsby";
import "./layout.css";
import styled from 'styled-components';

const  Header = styled.header`
  display: flex;
  background-color: #000;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const NavLinks = styled.nav`
  margin-left: auto;
  display: flex;
`;

const Branding = styled.div`
  color: orange;
  font-weight:bold;
  margin: auto 0;
  font-size: 1.4em;
`;

const NavLink = styled.div`
  margin: auto 0;
  a {
    color: #fff;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: orange;
    }
  }
`;

const Main = styled.main`
  margin: 0 auto;
`;

const navigationQuery = graphql`
  query MyQuery {
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigation_links {
            label
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}

`;

const Layout = ({ children }) => {

  return (
    <>
      <Header>
        
          <StaticQuery 
          query={`${navigationQuery}`} 
          render={(data)=>{
            return (
              <>
                <Branding>
                  {data.prismic.allNavigations.edges[0].node.branding}
                </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map((link)=>{ 
                  return (
                      <NavLink key={link.link._meta.uid}>
                        <Link to={`/${link.link._meta.uid}`}>
                          {link.label}
                        </Link>
                      </NavLink>
                    )
                  })}
                </NavLinks>
              </>
            )
          }}/>
      </Header>
      <Main>{children}</Main> 
    </> 
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
