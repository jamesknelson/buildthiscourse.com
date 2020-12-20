import { routeByPattern } from 'retil-router'

import { router as blogIndexRouter } from './blogIndexRouter'
import { router as blogPostRouter } from './blogPostRouter'

export const router = routeByPattern({
  '/': blogIndexRouter,
  '/:slug': blogPostRouter,
})
