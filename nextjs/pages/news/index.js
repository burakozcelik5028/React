import Link from 'next/link'
import { Fragment } from 'react'

export default function News() {

  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='news/lalala'>lalalala</Link>
        </li>
        <li>
          <Link href='news/dededede'>dededede</Link>
        </li>
        <li>
          <Link href='denemelik'>denemelik</Link>
        </li>
      </ul>
    </Fragment>
  )
}
