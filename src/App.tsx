import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NewPost } from './Post/NewPost';


export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/new'>
          <NewPost />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
