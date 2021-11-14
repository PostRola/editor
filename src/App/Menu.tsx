import { css, cx } from '@emotion/css';

import { GirlFace } from '../Icon/logo';
import { veryThinTide } from '../theme';


export interface MenuProps {}


const menuS = css`
  box-shadow: 0 4px 4px ${veryThinTide};
`;

const logoS = css`
  width: 80px;
  height: 57px;
`;

const containerS = css`
  max-width: 1440px;
  margin: 0 auto;
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
