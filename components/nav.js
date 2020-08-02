import React from 'react'
import Link from 'next/link'

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li>
              <Link href="/">
                <a>Christin Mikolai</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className="navbar-nav">
            {categories.map(category => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.id}`} href="/category/[id]">
                    <a className="">{category.name}</a>
                  </Link>
                </li>
              )
            })}
            <li key='aboutme'>
              <Link as={`/aboutme`} href="/aboutme">
                <a className="">About Me</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
