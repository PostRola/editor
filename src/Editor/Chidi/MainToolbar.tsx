import { Group, useCss } from '@mantine/core';
import { Editor } from '@tiptap/react';

import { EditorIconButton } from './EditorButton';


export interface MainToolbarProps {
  className?: string;
  editor: Editor;
}


export function MainToolbar(props: MainToolbarProps) {

  const { className, editor } = props;

  const { cx } = useCss();

  const isBold = editor.isActive('bold');
  const isItalic = editor.isActive('italic');
  const isStrike = editor.isActive('strike');
  const isUnderline = editor.isActive('underline');
  const isH2 = editor.isActive('heading', { level: 2 });
  const isH3 = editor.isActive('heading', { level: 3 });
  const isQuote = editor.isActive('blockquote');
  const isListOrdered = editor.isActive('orderedList');
  const isListUnordered = editor.isActive('bulletList');
  const isCodeBlock = editor.isActive('codeBlock');

  const onBold = () => editor.chain().focus().toggleBold().run();
  const onItalic = () => editor.chain().focus().toggleItalic().run();
  const onStrike = () => editor.chain().focus().toggleStrike().run();
  const onUnderline = () => editor.chain().focus().toggleUnderline().run();
  const onH2 = () => editor.chain().focus().toggleHeading({ level: 2 }).run();
  const onH3 = () => editor.chain().focus().toggleHeading({ level: 3 }).run();
  const onQuote = () => editor.chain().focus().toggleBlockquote().run();
  const onListOrdered = () => editor.chain().focus().toggleOrderedList().run();
  const onListUnordered = () => editor.chain().focus().toggleBulletList().run();
  const onCodeBlock = () => editor.chain().focus().toggleCodeBlock().run();
  const onUndo = () => editor.chain().focus().undo().run();
  const onRedo = () => editor.chain().focus().redo().run();

  const onImage = () => editor.chain().focus()
    .setImage({
      src: '',
      alt: '',
      caption: '',
      size: 'fullwidth'
    })
    .run();

  return (
    <Group className={cx('toolbar', className)} spacing='xl'>
      <Group spacing={0}>
        <EditorIconButton
          title='Heading' icon='H2'
          pushed={isH2} onClick={onH2} />
        <EditorIconButton
          title='Sub Heading' icon='H3'
          pushed={isH3} onClick={onH3}/>
        <EditorIconButton
          title='Quote' icon='DoubleQuote'
          pushed={isQuote} onClick={onQuote} />
        <EditorIconButton
          title='Ordered List' icon='ListOrdered'
          pushed={isListOrdered} onClick={onListOrdered} />
        <EditorIconButton
          title='Unordered List' icon='ListUnordered'
          pushed={isListUnordered} onClick={onListUnordered} />
        <EditorIconButton
          title='Code Snippet' icon='CodeView'
          pushed={isCodeBlock} onClick={onCodeBlock} />
        <EditorIconButton
          title='Attach Image' icon='Image'
          onClick={onImage} />
        <EditorIconButton
          title='Add Attachment' icon='Attachment'
          pushed={false} />
      </Group>

      <Group spacing={0}>
        <EditorIconButton
          title='Emphasis' icon='Bold'
          pushed={isBold} onClick={onBold} />
        <EditorIconButton
          title='Italic' icon='Italic'
          pushed={isItalic} onClick={onItalic} />
        <EditorIconButton
          title='Underline' icon='Underline'
          pushed={isUnderline} onClick={onUnderline} />
        <EditorIconButton
          title='Strikethrough' icon='Strikethrough'
          pushed={isStrike} onClick={onStrike} />
      </Group>

      <Group spacing={0}>
        <EditorIconButton
          title='Undo' icon='ArrowGoBack'
          onClick={onUndo} />
        <EditorIconButton
          title='Redo' icon='ArrowGoForward'
          onClick={onRedo} />
      </Group>
    </Group>
  );
}
