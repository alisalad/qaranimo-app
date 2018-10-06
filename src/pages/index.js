import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card'
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
  </Layout>
)

export default IndexPage
