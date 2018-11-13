import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Image from '../components/image'
import navBar from '../components/navBar'


const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.datoCmsHomePage.heading}</h1>
    <p>{data.datoCmsHomePage.desc}</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
    <Link to="/cases/case1">case1</Link>
    </div>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    datoCmsHomePage {
      heading,
      desc,
    }
  }
`;

export default IndexPage;
