import { css, cx } from '@emotion/css';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import { useState } from 'react';

import { tide } from '../../theme';

import { FileInput } from './FileInput';
import { ImagePreview } from './ImagePreview';

export interface ImageEditorProps {

}

const extensions = new Set(['image/png', 'image/jpeg', 'image/gif']);

const rootStyle = css`
  &:hover {
    box-shadow: 0 0 1px ${tide};
  }
`;

const figureStyle = css`
  margin: 0;
`;

export function ImageEditor(props: ImageEditorProps) {

  console.log(props);

  const [file, setFile] = useState<File | null>(null);

  const onFileInput = (files: FileList) => {

    if (files.length === 1 && extensions.has(files[0].type)) {
      setFile(files[0]);

      return;
    }

    // TODO:
    // Only one file is allowed
    return;
  };

  return (
    <NodeViewWrapper>
      <div className={cx('image-editor', rootStyle)}>
        <figure className={figureStyle}>
          {file
            ? <ImagePreview file={file} />
            : <FileInput value={null} onChange={onFileInput} />}
          <NodeViewContent />
        </figure>
      </div>
    </NodeViewWrapper>
  );
}
