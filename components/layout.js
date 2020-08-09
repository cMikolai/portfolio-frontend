import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'

const Layout = ({ children, categories, article }) => (
  <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <Nav categories={categories} />

    {/*TODO: Tidy this up to always have the same page title layout but on home page */}
    {article ? (
      <>
        <div
          /* id="banner"
          className=""
          data-src={article.image.url}
          data-srcset={article.image.url}
          data-uk-img */
        >
          <h1 id="page-title">{article.title}</h1>
        </div>

        <div className="section">
          <div className="container-article">{children}</div>
        </div>
      </>
    ) : (
      <div className="section">
        <div className="container-category">{children}</div>
      </div>
    )}

    <Footer />
  </>
)

export default Layout
