// Type definitions for mobx-react-router 6.0
// Project: https://github.com/IBM/mobx-react-router

import { History, Location, Listener } from 'history';
import * as React from 'react'

declare namespace MobxReactRouter {

  type UnregisterCallback = () => void

  export interface SynchronizedHistory extends History {
    subscribe: (listener: Listener) => UnregisterCallback;
    unsubscribe?: UnregisterCallback;
  }

  export class RouterStore {
    history: History;
    location: Location;
  }

  export interface RouterStore extends Pick<History, 'push' | 'replace' | 'go' | 'back' | 'forward'> { }

  export function syncHistoryWithStore(history: History, store: RouterStore): SynchronizedHistory;

  export function Router(props: {history: History, children?: React.ReactNode})

  export function withRouter(Component)

  export function Route(props: {exact?: boolean, component?: React.ReactNode, path?: string | string[], render?: () => React.ReactNode})
}

export = MobxReactRouter;
