import { routeAsync } from 'retil-router'

import { BlogPostDocument } from 'src/generated/graphql'
import { AppRequest } from 'src/utils/routing'

export const router = routeAsync(async (req: AppRequest) => {
  const pageModulePromise = import('./blogPostPage')
  const query = req.createQuery(BlogPostDocument, {
    slug: req.params.slug as string,
  })

  await query.precache()

  const { Page } = await pageModulePromise

  return <Page query={query} />
})
