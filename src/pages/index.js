import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero2 {
                type
                primary {
                  hero_title
                  hero_content
                  background_image
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_action_grid2 {
                type
                primary {
                  section_title
                }
                fields {
                  button_destination {
                    ... on PRISMIC_Page {
                      page_title
                      content
                      _meta {
                        uid
                      }
                    }
                  }
                  button_label
                  call_to_the_action_title
                  featured_image
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body}/>
    </Layout>
  )
}

export default IndexPage
