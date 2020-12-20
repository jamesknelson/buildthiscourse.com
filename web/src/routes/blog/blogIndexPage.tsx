import Head from 'next/head'
import * as React from 'react'
import { Link } from 'retil-router'

import { BlogIndexQuery } from 'src/generated/graphql'
import { PrecachedQuery, usePrecachedQuery } from 'src/utils/graphql'

export interface Props {
  query: PrecachedQuery<BlogIndexQuery>
}

export function Page(props: Props) {
  const { query } = props
  const [{ data }] = usePrecachedQuery({ query })

  return (
    <div className="container">
      <Head>
        <title>build this blog</title>
      </Head>

      <main>
        {data.publishedPosts.map((post) => (
          <article key={post._id}>
            <h2>
              <Link to={`/blog/${post.slug!.current}`}>{post.title}</Link>
            </h2>
          </article>
        ))}
      </main>
    </div>
  )
}
