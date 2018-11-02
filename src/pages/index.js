import React from 'react'
import { Link } from 'gatsby'
import staticdata from '../../staticdata.json'

import Layout from '../components/layout'
import Card from '../components/Card'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transfrom: uppercase;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to Udub Web Solutions</h1>
        <p>
          Learn how to build a modern site using React and the most efficient
          libraries to get your site/product online
        </p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses more comimg</h2>
      <div className="CardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/hero.jpg')}
        />
        <Card
          title="Wordpress Traning"
          text="15 sections"
          image={require('../images/hero.jpg')}
        />
        <Card
          title="AdobeXD Traning"
          text="10 sections"
          image={require('../images/hero.jpg')}
        />
        <Card
          title="AdobeXD Traning"
          text="10 sections"
          image={require('../images/hero.jpg')}
        />
      </div>
    </div>

    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
