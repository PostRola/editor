import { css, cx } from '@emotion/css';

import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Gapcursor from '@tiptap/extension-gapcursor';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';

import { useEffect, useState } from 'react';

import { darkTide } from '../../theme';
import { Image } from '../Tiptap/ImageExtension';

import { MainToolbar } from './MainToolbar';

import { Title } from './Title';

export interface ChidiProps {

}

const rootS = css`
  position: relative;
  padding-top: 3rem;

  /* Dark shade: #626975 or #514740 */
  color: ${darkTide};
`;

const toolbarS = css`
`;

const writerStyle = css`
  padding: 1rem;
  flex-grow: 1;
  min-width: 0;

  font-size: 1.25rem;
`;


export function Chidi(props: ChidiProps) {

  const [title, setTitle] = useState('Sample title of the Post');

  const editor = useEditor({
    extensions: [
      Document,
      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlockLowlight,
      Dropcursor,
      Gapcursor,
      HardBreak,
      Heading.configure({ levels: [2, 3] }),
      History,
      HorizontalRule,
      Image,
      Italic,
      ListItem,
      OrderedList,
      Paragraph,
      Placeholder,
      Strike,
      Text,
      Underline
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

  const onJSON = () => {
    console.log(editor?.getJSON());
  };

  const onHTML = () => {
    console.log(editor?.getHTML());
  };

  return (
    <div className={cx('chidi', rootS)}>

      {editor && <MainToolbar className={toolbarS} editor={editor} />}

      {/* <div>
        <button onClick={onJSON}>GetJSON</button>
        <br/>
        <button onClick={onHTML}>GetHTML</button>
      </div> */}

      <div className={writerStyle}>
        <Title value={title} onChange={setTitle} onCommit={onCommit} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
