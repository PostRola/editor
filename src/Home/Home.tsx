import { cx } from '@emotion/css';

import { Button } from '../Components/Button';

export interface HomeProps {}


export function Home(props: HomeProps) {

  return (
    <div className={cx('home')}>
      <h2>Welcome to Chidi - The front-end of Rano.</h2>
      <div>
        <Button>New Port</Button>
      </div>
    </div>
  );

}
