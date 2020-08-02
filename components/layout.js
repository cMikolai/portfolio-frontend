import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children, categories, article }) => (
  <>
    <Head>
      <title>Strapi blog</title>
    </Head>

    <Nav categories={categories} />

    {/*TODO: Tidy this up to always have the same page title layout but on home page */}
    {article ? (
      <>
        <div
          id="banner"
          className=""
          data-src={article.image.url}
          data-srcset={article.image.url}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="section">
          <div className="container">{children}</div>
        </div>
      </>
    ) : (
      <div className="section">
        <div className="container">{children}</div>
      </div>
    )}
  </>
)

export default Layout
