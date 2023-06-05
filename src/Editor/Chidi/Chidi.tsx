import { Stack, Text } from '@mantine/core';
import { createStyles } from '@mantine/styles';

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
import TiptapText from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';

import { lowlight } from 'lowlight/lib/core';
import { useEffect, useState } from 'react';

import { darkTide, editorFontFamily } from '../../theme';
import { Image } from '../Tiptap/ImageExtension';
import { MainToolbar } from './MainToolbar';
import { Title } from './Title';

export interface ChidiProps {

}


const useStyles = createStyles((theme) => ({

  root: {
    position: 'relative',
    height: '100%',
    maxWidth: '1280px',
    margin: '0 auto 1rem',

    color: darkTide
  },

  toolbar: {
    display: 'flex',
    position: 'sticky',
    zIndex: 2,
    top: '0',

    backgroundColor: '#FBFAFA',
    border: '1px solid #EFEBEB',
    borderTop: 0
  },

  writer: {
    padding: '6rem 0rem 1rem',
    flexGrow: 1,
    minWidth: 0,

    fontFamily: editorFontFamily,
    fontSize: '1.25rem',
  },

  title: {
    padding: '0.75rem 0',
    marginBottom: '1rem',
    borderTop: '1px solid #F1EFEE',
    borderBottom: '1px solid #F1EFEE',
  }

}));



export function Chidi(props: ChidiProps) {

  const { classes, cx } = useStyles();


  const [title, setTitle] = useState('Sample title of the Post');

  const editor = useEditor({
    extensions: [
      // Bare mimimum
      Document,
      Paragraph,
      TiptapText,

      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlockLowlight.configure({ lowlight }),
      Dropcursor,
      Gapcursor,
      HardBreak,
      Heading.configure({ levels: [2, 3] }),
      History,
      HorizontalRule,
      Italic,
      ListItem,
      OrderedList,
      Placeholder,
      Strike,
      Underline,

      // Custom extensions
      Image,
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
    <Stack
      className={cx('chidi', classes.root)}
      align='stretch'
      spacing={0}>
        {editor && (
          <MainToolbar className={classes.toolbar} editor={editor} /> )}

        <div className={classes.writer}>
          <Text size='xs' color='gray'>Title</Text>
          <div className={classes.title}>
            <Title value={title} onChange={setTitle} onCommit={onCommit} />
          </div>
          <EditorContent editor={editor} />
        </div>
    </Stack>
  );
}
