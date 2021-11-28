import { cx } from '@emotion/css';
import { PrimaryButton } from '@fluentui/react';


export interface HomeProps {}


export function Home(props: HomeProps) {

  return (
    <div className={cx('home')}>
      <h2>Welcome to Chidi - The front-end of Rano.</h2>
      <div>
        <PrimaryButton>
          Create New Post
        </PrimaryButton>
      </div>
    </div>
  );

}
