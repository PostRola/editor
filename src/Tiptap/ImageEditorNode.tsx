import { css } from '@emotion/css';
import { Editor, NodeViewWrapper } from '@tiptap/react';

import { ImageEditor } from './ImageEditor';
import { Figure } from './Type';

export interface ImageEditorNodeProps {
  editor: Editor;
  node: {
    attrs: Partial<Figure>;
  };
  selected: boolean;
  updateAttributes: (attr: Partial<Figure>) => void;
}

const nodeGapStyle = css`
  margin: 1.25rem 0;
`;

export function ImageEditorNode(props: ImageEditorNodeProps) {

  console.log(props.selected);

  const { node, updateAttributes, selected } = props;

  return (
    <NodeViewWrapper>
      <ImageEditor className={nodeGapStyle} selected={selected}
        figure={node.attrs} update={updateAttributes} />
    </NodeViewWrapper>
  );
}
