import { NextilRequest, NextilResponse, nextilRoutedPage } from 'nextil'
import { RouterFunction, useRouterRequest } from 'retil-router'
import { Client } from 'urql'

// import { AuthUser, getAuthService } from './auth'
import { CreatePrecachedQueryFunction, getURQLState } from './graphql'

export type AppRequest = NextilRequest & {
  cache?: any
  client: Client
  createQuery: CreatePrecachedQueryFunction

  // currentUser?: null | AuthUser
  doNotTrack?: boolean

  // This is a mutable object which can be modified by routes to configure
  // how the layout behaves.
  layoutOptions: {
    disableSearch?: boolean
  }
}

export type AppRouterFunction = RouterFunction<AppRequest, NextilResponse>

export function appRoutedPage(pageRouter: AppRouterFunction) {
  return nextilRoutedPage(pageRouter, {
    extendRequest: (request) => {
      // const [authSource, authController] = getAuthService(request)
      // const auth = use(authSource, undefined)
      const { client, cache, createQuery } = getURQLState(
        request /*, authController, auth*/,
      )
      return {
        cache,
        client,
        createQuery,
        // currentUser: auth === undefined ? undefined : auth.user,
        layoutOptions: {},
      }
    },

    extractSerializedData: (request) => request.cache?.extractData?.(),
  })
}

export function useRequest(): AppRequest {
  return useRouterRequest<AppRequest>()
}
