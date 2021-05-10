import { css } from '@emotion/css';
import { Editor, NodeViewWrapper } from '@tiptap/react';

import { ImageEditor } from './ImageEditor';
import { Figure } from './Type';

export interface ImageEditorNodeProps {
  editor: Editor;
  node: {
    attrs: Figure;
    nodeSize: number;
  };
  getPos: () => number;
  selected: boolean;
  updateAttributes: (attr: Partial<Figure>) => void;
}

const nodeGapStyle = css`
  margin: 1.25rem 0;
`;

export function ImageEditorNode(props: ImageEditorNodeProps) {

  console.log(props);

  const { editor, getPos, node, updateAttributes, selected } = props;

  const onRemove = () => {
    const transaction = editor.view.state.tr;
    const position = getPos();

    transaction.delete(position, position + node.nodeSize);
    editor.view.dispatch(transaction);
  };

  return (
    <NodeViewWrapper>
      <ImageEditor className={nodeGapStyle} selected={selected}
        figure={node.attrs} onFigure={updateAttributes}
        onRemove={onRemove} />
    </NodeViewWrapper>
  );
}
