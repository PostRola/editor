import { MantineProvider } from '@mantine/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NewPost } from '../Post/NewPost';
import { Home } from '../Home/Home';
import { appTheme } from '../theme';

import { Shell } from './Shell';


export function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shell />}>
            <Route path='' element={<Home />} />
          </Route>
          <Route path='/new' element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
