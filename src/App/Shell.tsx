import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';


export function Shell() {
  return (
    <div className='shell'>
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
