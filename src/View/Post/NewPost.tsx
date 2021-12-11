import { cx } from '@emotion/css';

import { Chidi } from '../../Editor/Chidi/Chidi';
import { PostHeader } from './PostHeader';


export function NewPost() {

  return (
    <div className={cx('new-post')}>
      <PostHeader />
      <Chidi />
    </div>
  );
}
