import { EditorContent, useEditor } from '@tiptap/react';
import { defaultExtensions } from '@tiptap/starter-kit';

export interface ChidiProps {

}

export function Chidi(props: ChidiProps) {

  const editor = useEditor({
    extensions: defaultExtensions(),
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <EditorContent editor={editor} />
  );
}
