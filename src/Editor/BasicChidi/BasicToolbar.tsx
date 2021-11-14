import { css, cx } from '@emotion/css';
import { BubbleMenu, Editor } from '@tiptap/react';
import { KeyboardEvent, useState } from 'react';
import type { Props } from 'tippy.js';

import { Bold, Check, Italic, Link, LinkUnlink, Strikethrough, Underline } from '../../Icon';
import { placeholderText, tide } from '../../theme';
import { ContextButton } from './ContextButton';


export interface BasicToolbarProps {
  className?: string;
  editor: Editor;

  isLinkInput: boolean;
  onIsLinkInput: (isLink: boolean) => void;
}

const rootStyle = css`
  position: relative;
  overflow: hidden;
`;

const animWrapperStyle = css`
  transform: translate3d(0, 0, 0);
  transition: all 120ms ease-out;

  &.linkOpen {
    transform: translate3d(0, -2.25rem, 0);
  }
`;

const buttonRowStyle = css`
  display: flex;
`;


const buttonStyle = css`
  width: 2.25rem;
  height: 2.25rem;
`;

const iconStyle = css`
  width: 1rem;
  height: 1rem;

  transition: all 120ms ease-out;
  transform: scale3d(1, 1, 1);

  fill: ${tide};

  &.pushed {
    transform: scale3d(1.4, 1.4, 1);
    fill: #DBC0AF;
  }
`;

const linkInputStyle = css`
  position: absolute;
  display: flex;
  top: 100%;
  left: 0;
  right: 0;
  height: 100%;
`;

const inputStyle = css`
  min-width: 0;
  padding: 0 0.5rem;

  flex-grow: 1;
  align-self: stretch;

  border: 0;
  border-right: 1px solid ${placeholderText};
  outline: none;

  background: transparent;
  color: inherit;
  font-family: inherit;
`;


export function BasicToolbar(props: BasicToolbarProps) {

  const { className, editor, isLinkInput, onIsLinkInput } = props;

  const [href, setHref] = useState('');

  const isBold = editor.isActive('bold');
  const isItalic = editor.isActive('italic');
  const isStrike = editor.isActive('strike');
  const isUnderline = editor.isActive('underline');
  const isLink = editor.isActive('link');

  const onBold = () => editor.chain().focus().toggleBold().run();
  const onItalic = () => editor.chain().focus().toggleItalic().run();
  const onStrike = () => editor.chain().focus().toggleStrike().run();
  const onUnderline = () => editor.chain().focus().toggleUnderline().run();

  const onLink = () => onIsLinkInput(true);
  const onUnlink = () => editor.chain().focus().unsetLink().run();

  const setLink = (href: string) => {
    if (href.trim().length) {
      editor.chain().focus().setLink({ href: href.trim() }).run();
    }
  };

  const onLinkKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setLink(href);
      onIsLinkInput(false);
      setHref('');
    }
  };

  const onLinkCheck = () => {
    onIsLinkInput(false);
    setHref('');
  };

  return (
    <div className={cx('basic-toolbar', rootStyle, className)}>
      <div className={cx(animWrapperStyle, isLinkInput && 'linkOpen')}>
        <div className={buttonRowStyle}>
          <ContextButton className={cx(buttonStyle)}
            onClick={onBold}>
              <Bold className={cx(iconStyle, isBold && 'pushed')} />
          </ContextButton>
          <ContextButton className={buttonStyle}
            onClick={onItalic}>
              <Italic className={cx(iconStyle, isItalic && 'pushed')} />
          </ContextButton>
          <ContextButton className={cx(buttonStyle)}
            onClick={onUnderline}>
              <Underline className={cx(iconStyle, isUnderline && 'pushed')} />
          </ContextButton>
          <ContextButton className={cx(buttonStyle)}
            onClick={onStrike}>
              <Strikethrough className={cx(iconStyle, isStrike && 'pushed')} />
          </ContextButton>

          {isLink
            ? (
              <ContextButton className={buttonStyle}
                onClick={onUnlink}>
                  <LinkUnlink className={cx(iconStyle, 'pushed')} />
              </ContextButton>)
            : (
              <ContextButton className={buttonStyle}
                onClick={onLink}>
                  <Link className={cx(iconStyle)} />
              </ContextButton>)}
        </div>

        <div className={linkInputStyle}>
          <input type='text' className={inputStyle}
            placeholder='Insert hyperlink here'
            onKeyPress={onLinkKeyPress}
            value={href} onChange={(e) => setHref(e.target.value)} />
          <ContextButton className={cx(buttonStyle)} onClick={onLinkCheck}>
            <Check className={cx(iconStyle)} />
          </ContextButton>
        </div>
      </div>
    </div>
  );
}

export interface BasicContextMenuProps {
  className?: string;
  editor: Editor;
}

export function BasicContextMenu(props: BasicContextMenuProps) {

  const { editor } = props;

  const [isLinkInput, setIsLinkInput] = useState(false);

  const opts: Partial<Props> = {
    arrow: true,
    theme: 'copper',
    onHide: () => setIsLinkInput(false)
  };

  return editor && (
    <BubbleMenu editor={editor} tippyOptions={opts}>
      <BasicToolbar editor={editor}
        isLinkInput={isLinkInput} onIsLinkInput={setIsLinkInput} />
    </BubbleMenu>
  );
}
