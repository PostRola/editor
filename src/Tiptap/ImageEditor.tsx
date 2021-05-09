import { css, cx } from '@emotion/css';
import { useEffect, useState } from 'react';

import { BasicChidi } from '../BasicChidi/BasicChidi';
import { Button } from '../Components/Button';
import { Information } from '../Icons';
import { tide, veryThinTide } from '../theme';

import { FileInput } from './FileInput';
import { ImagePreview, useLocalImage } from './ImagePreview';
import { ImageTools } from './ImageTool';
import { Figure } from './Type';


export interface ImageEditorProps {
  className?: string;
  selected?: boolean;
  figure: Partial<Figure>;
  update: (figure: Partial<Figure>) => void;
}


const extensions = new Set(['image/png', 'image/jpeg', 'image/gif']);

const rootStyle = css`
  position: relative;
  padding: 1rem 1rem 1px;

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

  margin: 0.5rem 2rem 0.75rem 0;

  /* Silent the prose mirror p tag warning. */
  p {
    margin: 0;
  }
`;


export function ImageEditor(props: ImageEditorProps) {

  const { className, selected } = props;

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

  // Tell editor to remove this image node.
  const onRemove = () => {};

  const onAltToggle = () => {};
  const onState = () => {};

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
          <BasicChidi placeholder='Add image caption' />
        </figcaption>
      </figure>
      <div>
        <ImageTools onRemove={onRemove} isImage={!!isValidImage}
          isAlt={false} onAltToggle={onAltToggle}
          state={'standard'} onState={onState} />
      </div>
    </div>
  );
}
