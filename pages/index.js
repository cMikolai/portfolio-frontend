import React from 'react'
import HomeArticles from '../components/home-articles'
import Layout from '../components/layout'
import { getArticles, getCategories } from '../lib/api'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { HomeBanner, WhiteHeart } from '../assets/images/svgs'

export async function getStaticProps() {
  const articles = await getArticles()
  const categories = await getCategories()
  return {
    props: { articles, categories },
    revalidate: 1,
  }
}

export default function Home({ articles, categories }) {
  return (
    <div id='home-page'>
      <Nav categories={categories} />
      <div id="home-banner">
        <div className="home-banner-inner">
          <div className="home-banner-left">
            <h1>Front-End Web Developer</h1>
            <p>with a <WhiteHeart /> for ReactJS and UX</p>
          </div>
          <div className="home-banner-right">
            <HomeBanner />
          </div>
        </div>
      </div>

      <div id="home-section-about_me">
        <div className="container">
          <h2 className="home-section-title">About Me</h2>
          <p>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
        </div>
      </div>

      {/* TODO: Mobile view -->*/}

      <div id="home-section-latest_projects">
        <div className="container">
          <h2 className="home-section-title">Latest Projects</h2>
          <HomeArticles
            articles={articles}
            categories='Projects'
            limit={3} />
        </div>
      </div>

      <div id="home-section-latest_articles">
        <div className="container">
          <h2 className="home-section-title">Latest Articles</h2>
          <HomeArticles
            articles={articles}
            categories='Blog'
            limit={3} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
