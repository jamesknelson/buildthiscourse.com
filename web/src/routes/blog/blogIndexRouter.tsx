import { routeAsync } from 'retil-router'

import { BlogIndexDocument } from 'src/generated/graphql'
import { AppRequest } from 'src/utils/routing'

export const router = routeAsync(async (req: AppRequest) => {
  const pageModulePromise = import('./blogIndexPage')
  const query = req.createQuery(BlogIndexDocument, {
    publishedBefore: new Date(),
  })

  await query.precache()

  const { Page } = await pageModulePromise

  return <Page query={query} />
})
