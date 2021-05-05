import { css, cx } from '@emotion/css';
import { EditorContent, useEditor } from '@tiptap/react';
import { defaultExtensions } from '@tiptap/starter-kit';
import { useState } from 'react';
import { noop } from 'rxjs';

import { Title } from './Title';
import { InlineToolbar } from './InlineToolbar';
import { MainMenu } from './Menu';

export interface ChidiProps {

}

const rootStyle = css`
  margin: auto;
  max-width: 720px;

  .ProseMirror {
    outline: 0;
    font-size: 1.125rem;
  }
`;

export function Chidi(props: ChidiProps) {

  const [title, setTitle] = useState('Sample title of the Post');

  const editor = useEditor({
    extensions: defaultExtensions(),
    content: '<p>Hello World! 🌎️</p>',
  });

  const onCommit = () => {
    editor?.commands.focus('start');
  };

  return (
    <div className={cx('chidi', rootStyle)}>
      <Title value={title} onChange={setTitle} onCommit={onCommit} />
      {/* <InlineToolbar editor={editor} /> */}
      <MainMenu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
