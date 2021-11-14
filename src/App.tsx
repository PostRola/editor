import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NewPost } from './Post/NewPost';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/new' element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}
