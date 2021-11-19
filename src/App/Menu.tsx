import { css, cx } from '@emotion/css';
import { Link } from 'react-router-dom';

import { Rano } from '../Icon/logo';
import { darkTide, placeholderText } from '../theme';


export interface MenuProps {
  className?: string;
}


const rootS = css`
  border-right: 1px solid ${placeholderText};
`;

const logoS = css`
  width: 120px;
  height: auto;

  color: ${darkTide};
`;

const containerS = css`
  position: sticky;
  top: 0;

  box-sizing: border-box;
`;

const headS = css`
  display: flex;
  margin: 2rem 1rem;
`;


export function Menu(props: MenuProps) {

  const { className } = props;

  return (
    <nav className={cx('app-menu', rootS, className)}>
      <div className={cx(containerS)}>
        <h1 className={headS}>
          <Link to='/'>
            <Rano className={cx(logoS)} />
          </Link>
        </h1>
      </div>
    </nav>
  );
}
