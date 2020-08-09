import React from 'react'
import Articles from '../components/articles'
import Layout from '../components/layout'
import { getArticles, getCategories } from '../lib/api'
import Nav from '../components/nav'
import Footer from '../components/footer'

export async function getStaticProps() {
  const articles = await getArticles()
  const categories = await getCategories()
  return {
    props: { articles, categories },
    unstable_revalidate: 1,
  }
}

export default function Home({ articles, categories }) {
  return (
    <div id='home-page'>
      <Nav categories={categories} />
      <div id="home-banner">
        <div>
          Front-End Web Developer

        </div>
        <div>Image Right</div>
      </div>

      <div id="home-section-about_me">
        <h2>About Me</h2>
      </div>

      <div id="home-section-latest_projects">
        <h2>Latest Projects</h2>
      </div>

      <div id="home-section-latest_articles">
        <h2>Latest Articles</h2>
      </div>

      {/* <Layout categories={categories}> */}
        {/* <h1 id="page-title-home">Home</h1> */}
        {/* <Articles articles={articles} /> */}
      {/* </Layout> */}
      <Footer />
    </div>
  )
}
