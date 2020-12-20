import BlockContent from '@sanity/block-content-to-react'
import Head from 'next/head'
import * as React from 'react'

import { BlogPostQuery } from 'src/generated/graphql'
import { PrecachedQuery, usePrecachedQuery } from 'src/utils/graphql'

export interface Props {
  query: PrecachedQuery<BlogPostQuery>
}

export function Page(props: Props) {
  const { query } = props
  const [{ data }] = usePrecachedQuery({ query })
  const post = data.postsWithSlug[0]

  return (
    <div className="container">
      <Head>
        <title>{post.title}</title>
      </Head>

      <main>
        <article>
          <h2>{post.title}</h2>
          <BlockContent blocks={post.contentRaw} />
        </article>
      </main>
    </div>
  )
}
