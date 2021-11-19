import { css, cx } from '@emotion/css';
import { Outlet } from 'react-router-dom';

import { Menu } from './Menu';


const rootS = css`
  display: grid;

  height: 100%;
  grid-template-columns: 320px 1fr;
`;


export function Shell() {
  return (
    <div className={cx(rootS, 'shell')}>
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
