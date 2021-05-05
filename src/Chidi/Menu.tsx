import { css } from '@emotion/css';
import { Editor, FloatingMenu, BubbleMenu } from '@tiptap/react';
import { Props } from 'tippy.js';

import { InlineToolbar } from './InlineToolbar';

export interface MainMenuProps {
  editor: Editor | null;
}

const options: Partial<Props> = {
  duration: 240,
  maxWidth: 'none',
  placement: 'bottom-start',
  offset: [0, 8]
};


export function MainMenu(props: MainMenuProps) {

  const { editor } = props;

  return editor && (
    <FloatingMenu editor={editor} tippyOptions={options}>
      <InlineToolbar editor={editor} />
    </FloatingMenu>
  );
}


export interface ContextMenuProps {
  editor: Editor | null;
}


export function ContextMenu(props: ContextMenuProps) {

  const { editor } = props;

  return editor && (
    <BubbleMenu editor={editor}>
      <div>Something...</div>
    </BubbleMenu>
  );
}
