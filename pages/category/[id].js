import Articles from '../../components/articles'
import { getCategory, getCategories } from '../../lib/api'
import Layout from '../../components/layout'

export async function getStaticProps({ params }) {
  const category = await getCategory(params.id)
  const categories = await getCategories()
  return {
    props: { category, categories },
    revalidate: 1,
  }
}

export default function Category({ category, categories }) {
  return (
    <Layout categories={categories}>
      <h1 id="page-title">{category.name}</h1>
      <div className="container">
        <Articles articles={category.articles} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(category => `/category/${category.id}`),
    fallback: false,
  }
}
