import { Button, createStyles, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

import { ArrowLeftS, SendPlane, SoundModule } from '../../Icon';


export interface PostHeaderProps {
  status?: string;
}


const useStyles = createStyles(() => ({

  root: {
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #EFEBEB'
  }

}));


export function PostHeader(props: PostHeaderProps) {

  const { classes, cx } = useStyles();

  return (
    <header className={cx(classes.root)}>
      <Group spacing='md' position='apart'>
        <Group>
          <BackButton />
        </Group>
        <Group spacing='md'>
          <PublishButton />
          <SettingButton />
        </Group>
      </Group>
    </header>
  );
}


function BackButton() {
  return (
    <Button component={Link}
      variant='default'
      size='xs'
      sx={{ border: 0 }}
      to='/posts'
      leftIcon={<ArrowLeftS />}>
        Back to Posts
    </Button>
  );
}


function SettingButton() {
  return (
    <Button
      variant='outline'
      size='sm'
      sx={{ border: 0 }}
      rightIcon={<SoundModule />}>
        Settings
    </Button>
  );
}

function PublishButton() {
  return (
    <Button
      variant='outline'
      size='sm'
      sx={{ border: 0 }}
      rightIcon={<SendPlane />}>
        Publish
    </Button>
  );
}
