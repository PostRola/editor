import { css, cx } from '@emotion/css';

import { GirlFace } from '../Icon/logo';
import { darkTide, veryThinTide } from '../theme';


export interface MenuProps {}


const menuS = css`
  box-shadow: 0 4px 4px ${veryThinTide};
`;

const logoS = css`
  width: 57px;
  height: 48px;

  color: ${darkTide};
`;

const containerS = css`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.25rem;
`;

export function Menu(props: MenuProps) {

  return (
    <nav className={cx('app-menu', menuS)}>
      <div className={cx(containerS)}>
        <GirlFace className={cx(logoS)} />
      </div>
    </nav>
  );
}
