// This contains sample code which tests the typings. This code does not run, but it is type-checked
// import { Router } from 'react-router';
import { History, Location, createBrowserHistory, createMemoryHistory } from 'history';
import { RouterStore, SynchronizedHistory, syncHistoryWithStore, Router } from '../';

import * as React from 'react';

const routerStore: RouterStore = new RouterStore();
const browserHistory: History = createBrowserHistory();
const history: SynchronizedHistory = syncHistoryWithStore(browserHistory, routerStore);

{
  { <Router history={history}/> }
  { <Router history={history} /> }
  { <Router history={browserHistory} /> }
  { <Router history={createMemoryHistory()} /> }
  { <Router history={createBrowserHistory()} /> }
  { <Router history={syncHistoryWithStore(createBrowserHistory(), new RouterStore())} /> }
  { <Router history={syncHistoryWithStore(createMemoryHistory(), new RouterStore())} /> }
}

{
  history.unsubscribe?.();

  const unsubscribeFromStore = history.subscribe(({location, action}) => console.log(location.pathname, action));
  history.push('/test1');
  unsubscribeFromStore();
  history.push('/test2');
}

{
  const history: History = routerStore.history;
  history.createHref({ pathname: 'path', hash: '#1234' });

  const location: Location = history.location;
  history.push('path/to/location');
  history.push(location);
  history.replace('path/to/replace');
  history.replace(location.pathname, location.state);
}

{
  const { pathname, state } = routerStore.location;
  routerStore.push('path/to/location');
  routerStore.push(pathname, state);
  routerStore.go(-1);
  routerStore.back();
  routerStore.forward();
  routerStore.replace('path/to/replace');
  routerStore.replace(pathname, state);
}
