import React from 'react'
import Card from './card'

const HomeArticles = ({ articles, categories }) => {
  return (
    <div>
        <div>
          <div className="">
            {articles.map(article => {
              return (article.category.name === categories)
                ? <Card article={article} key={`article__${article.id}`} />
                : null
            })}
          </div>
        </div>
    </div>
  )
}

export default HomeArticles
