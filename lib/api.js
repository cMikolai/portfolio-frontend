async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(
    `${
      process.env.API_URL ||
      /* 'http://localhost:1337' || */
      'https://christinmikolai-portfolio.herokuapp.com'
    }/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  )

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getArticles() {
  const data = await fetchAPI(`query Articles {
    articles(sort: "published_date_at:desc") {
      id
      title
      published_date_at
      category {
        id
        name
      }
      image {
        url
        alternativeText
      }
    }
  }`)
  return data.articles
}

export async function getArticle(id) {
  const data = await fetchAPI(
    `query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      published_date_at
      image {
        url
        alternativeText
      }
      category {
        id
        name
      }
    }
  }`,
    { variables: { id } }
  )
  return data.article
}

export async function getCategories() {
  const data = await fetchAPI(`query Categories {
    categories {
      id
      name
    }
  }`)
  return data.categories
}

export async function getCategory(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        id
        title
        content
        published_date_at
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
      }
    }
  }
`,
    { variables: { id } }
  )
  return data.category
}
