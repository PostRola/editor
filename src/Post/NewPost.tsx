import { cx } from '@emotion/css';

import { Chidi } from '../Chidi/Chidi';


export function NewPost() {

  return (
    <div className={cx('new-post')}>
      <Chidi />
    </div>
  );
}
