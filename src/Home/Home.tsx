import { cx } from '@emotion/css';
import { Button, Text, Title } from '@mantine/core';



export interface HomeProps {}


export function Home(props: HomeProps) {

  return (
    <div className={cx('home')}>
      <Title order={2}>Welcome to Chidi - The front-end of Rano.</Title>
      <Text>More content coming soon.</Text>
      <Button>New Post</Button>
    </div>
  );

}
