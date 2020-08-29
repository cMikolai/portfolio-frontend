import React from 'react'
import Card from './card'

const Articles = ({ articles }) => {

  return (
    <div className="cards_overview">
      {articles.map(article => {
        return <Card article={article} key={`article__${article.id}`} />
      })}
    </div>
  )
}

export default Articles
