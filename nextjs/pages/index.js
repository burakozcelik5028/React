import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/blog/0 ">Blog</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </h1>
    </div>
  )
}
