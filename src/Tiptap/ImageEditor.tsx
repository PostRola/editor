import { css, cx } from '@emotion/css';
import { FormEvent, useEffect, useState } from 'react';

import { BasicChidi } from '../BasicChidi/BasicChidi';
import { placeholderText, tide, veryThinTide } from '../theme';

import { FileInput } from './FileInput';
import { ImagePreview, useLocalImage } from './ImagePreview';
import { ImageTools } from './ImageTool';
import { ImageAttrs, ImageSize } from '../EditorBase/Type';


export interface ImageEditorProps {
  className?: string;
  selected?: boolean;
  figure: ImageAttrs;
  onFigure: (figure: ImageAttrs) => void;
  onRemove: () => void;
}


const extensions = new Set(['image/png', 'image/jpeg', 'image/gif']);

const rootStyle = css`
  position: relative;
  padding: 1rem;

  &:hover {
    box-shadow: 0 0 0 1px ${tide};
  }

  &.selected {
    box-shadow: 0 0 0 2px ${tide};
  }
`;

const emptyStyle = css`
  box-shadow: 0 0 0 1px ${tide};
  background-color: ${veryThinTide};
`;


const figureStyle = css`
  margin: 0;
`;

const captionStyle = css`
  font-weight: 500;

  margin: 0.75rem 2rem 0 0;

  /* Silent the prose mirror p tag margins. */
  p {
    margin: 0;
  }
`;

const altTextStyle = css`
  display: none;
  padding: 0;
  width: 100%;

  background: transparent;
  border: 0;

  line-height: 1.25;
  font-size: 0.875rem;
  outline: none;

  color: inherit;
  font-family: inherit;

  &::placeholder {
    color: ${placeholderText};
  }
`;

const block = css`
  display: block;
`;

const none = css`
  display: none;
`;


export function ImageEditor(props: ImageEditorProps) {

  const { className, selected, figure, onFigure, onRemove } = props;

  const [isAlt, setIsAlt] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { isValid, url } = useLocalImage({ file });

  useEffect(() => {
    if (isValid === false) {
      setFile(null);
    }
  }, [isValid]);


  const onFileInput = (files: FileList) => {

    if (files.length === 1 && extensions.has(files[0].type)) {
      setFile(files[0]);

      return;
    }

    // TODO:
    // Only one file is allowed
    return;
  };

  const onAltToggle = () => setIsAlt(!isAlt);
  const onSize = (size: ImageSize) => onFigure({ ...figure, size });

  const onAlt = (e: FormEvent<HTMLInputElement>) => {
    onFigure({ ...figure, alt: (e.target as HTMLInputElement).value });
  };

  const isValidImage = isValid && url;

  const classes = cx(
    'image-editor',
    rootStyle,
    !isValidImage && emptyStyle,
    selected && 'selected',
    className);

  return (
    <div className={classes}>
      <figure className={figureStyle}>
        {isValidImage
          ? <ImagePreview url={url!} />
          : <FileInput onChange={onFileInput} />}
        <figcaption className={captionStyle}>
          <input className={cx(altTextStyle, isAlt && block)} type='text'
            placeholder='Add image description (alt text)'
            value={figure.alt} onInput={onAlt} />
          <BasicChidi className={isAlt ? none : block} placeholder='Add image caption' />
        </figcaption>
      </figure>
      <ImageTools onRemove={onRemove}
        isImage={!!isValidImage} isSelected={!!selected}
        isAlt={isAlt} onAltToggle={onAltToggle}
        size={figure.size} onSize={onSize} />
    </div>
  );
}
