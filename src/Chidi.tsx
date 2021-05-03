import { EditorContent, useEditor } from '@tiptap/react';
import { defaultExtensions } from '@tiptap/starter-kit';
import { useState } from 'react';
import { noop } from 'rxjs';

import { EditorTitle } from './EditorTitle';

export interface ChidiProps {

}

export function Chidi(props: ChidiProps) {

  const [title, setTitle] = useState('Sample title of the Post');

  const editor = useEditor({
    extensions: defaultExtensions(),
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <div>
      <EditorTitle value={title} onChange={setTitle} onCommit={noop} />
      <EditorContent editor={editor} />
    </div>
  );
}
