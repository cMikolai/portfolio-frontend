import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'
import Button from './Button'

const Card = ({ article }) => {
  return (
      <a className="card">
        <div className="card_inner">
          <img
            src={article.image.url}
            alt={article.image.alternativeText}
            height="100"
            className="card_image"
          />
          <div className="card_inner_content">
            <p className="card_date">
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
            <p className="card_title">
              {article.title}
            </p>
            <p>Lorem IpsumLorem IpsumLorem IpsumLorem</p>
            <Button
              link_as={`/article/${article.id}`}
              link_href={"/article/[id]"}
              className="button-secondary"
              text="Read more"
            />
          </div>
        </div>
      </a>
  )
}

export default Card
