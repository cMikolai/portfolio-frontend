import React from 'react'
import Link from 'next/link'

const Button = ({ link_as, link_href, className, text }) => {
  return (
    <Link as={link_as} href={link_href}>
      <button className={className}>
        {text}
      </button>
    </Link>
  )
}

export default Button
