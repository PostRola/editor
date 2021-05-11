import { css, cx } from '@emotion/css';

import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';

import { useEffect } from 'react';

import { BasicChidiDoc } from '../EditorBase/Type';

import { BasicContextMenu } from './BasicToolbar';


export interface BasicChidiProps {
  className?: string;
  placeholder?: string;
  onChange?: (content: BasicChidiDoc) => void;
}

const rootStyle = css`
  position: relative;

  /* Dark shade: #626975 or #514740 */
  color: #514740;

  .ProseMirror {
    font-size: 0.875rem;
  }
`;

const toolbarStyle = css`
`;


export function BasicChidi(props: BasicChidiProps) {

  const { className, placeholder, onChange } = props;

  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'paragraph'
      }),
      Bold,
      History,
      Italic,
      Link.configure({ openOnClick: false }),
      Paragraph,
      Placeholder.configure({ placeholder }),
      Strike,
      Text,
      Underline
    ],
    content: ''
  });

  // TODO: For validation purpose
  // editor.schema.nodeFromJSON(content);

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  return (
    <div className={cx('basic-chidi', rootStyle, className)}>
      {editor && (
        <BasicContextMenu className={toolbarStyle} editor={editor} />)}
      <EditorContent editor={editor} />
    </div>
  );
}
