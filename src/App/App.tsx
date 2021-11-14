import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Shell } from './Shell';
import { NewPost } from '../Post/NewPost';
import { Home } from '../Home/Home';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shell />}>
          <Route path='' element={<Home />} />
          <Route path='/new' element={<NewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
