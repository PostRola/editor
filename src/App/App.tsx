import { MantineProvider } from '@mantine/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NewPost } from '../Post/NewPost';
import { Home } from '../View/Home/Home';
import { appTheme } from '../theme';

import { Shell } from './Shell';
import { Tags } from '../View/Tag/Tags';
import { Posts } from '../View/Post/Posts';


export function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shell />}>
            <Route path='/posts' element={<Posts />} />
            <Route path='/tags' element={<Tags />} />
            <Route path='' element={<Home />} />
          </Route>
          <Route path='/posts/new' element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
