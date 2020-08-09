import Layout from '../../components/layout'
import { getCategories } from '../../lib/api'

export async function getStaticProps() {
  const categories = await getCategories()
  return {
    props: { categories },
    unstable_revalidate: 1,
  }
}

export default function AboutMe({ categories }) {
  return (
    <Layout categories={categories}>
      <h1 id="page-title">About Me</h1>
    </Layout>
  )
}
