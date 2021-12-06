import { Anchor, Group, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';



export interface HomeProps {}


export function Home(props: HomeProps) {

  return (
    <Group className={'home'} direction='column'>
      <Title order={2}>Welcome to Chidi - The front-end of Rano.</Title>
      <Text>More content coming soon.</Text>
      <Anchor component={Link} to='/posts/new'>New Post</Anchor>
    </Group>
  );

}
