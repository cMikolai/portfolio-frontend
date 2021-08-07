import React from 'react'
import Card from './card'

const HomeArticles = ({ articles, categories, limit }) => {
  return (
    <div className="cards">
      {console.log(typeof limit)}
      {/*TODO: fix limit & order */}
      {articles.slice(0, limit).map(article => {
        return (article.category.name === categories)
          ? <Card article={article} key={`article__${article.id}`} />
          : null
      })}
    </div>
  )
}

export default HomeArticles
