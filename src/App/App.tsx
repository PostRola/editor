import { ThemeProvider } from '@fluentui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NewPost } from '../Post/NewPost';
import { Home } from '../Home/Home';
import { appTheme } from '../theme';

import { Shell } from './Shell';


export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shell />}>
            <Route path='' element={<Home />} />
          </Route>
          <Route path='/new' element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
