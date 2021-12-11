import { MantineProvider } from '@mantine/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { appTheme } from '../theme';
import { NewPost } from '../View/Post/NewPost';
import { Home } from '../View/Home/Home';
import { Posts } from '../View/Post/Posts';
import { Tags } from '../View/Tag/Tags';
import { Shell } from './Shell';


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
