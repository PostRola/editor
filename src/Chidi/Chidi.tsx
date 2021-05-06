import { css, cx } from '@emotion/css';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import { defaultExtensions } from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

import { Title } from './Title';
import { MainMenu } from './Menu';

export interface ChidiProps {

}

const rootStyle = css`
  margin: auto;
  max-width: 720px;

  .ProseMirror {
    outline: 0;
    font-size: 1.125rem;

    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      height: 0;
      float: left;

      pointer-events: none;
      color: #CED4DA;
    }
  }
`;

export function Chidi(props: ChidiProps) {

  const [title, setTitle] = useState('Sample title of the Post');

  const editor = useEditor({
    extensions: [
      ...defaultExtensions({
        heading: {
          levels: [2, 3]
        }
      }),
      Placeholder
    ],
    content: '<p>Hello World! 🌎️</p>'
  });


  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  const onCommit = () => {
    editor?.commands.focus('start');
  };

  return (
    <div className={cx('chidi', rootStyle)}>
      <Title value={title} onChange={setTitle} onCommit={onCommit} />
      <MainMenu editor={editor} />
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
