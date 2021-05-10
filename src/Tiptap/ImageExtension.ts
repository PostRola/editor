import { Node } from '@tiptap/core';
import { Command, ReactNodeViewRenderer } from '@tiptap/react';

import { ImageEditorNode } from './ImageEditorNode';
import { Figure, FigureAttrs } from './Type';


export interface ImageOptions {}

declare module '@tiptap/core' {
  interface Commands {
    image: {
      setImage: (option: Figure) => Command;
    }
  }
}

export const Image = Node.create<ImageOptions>({
  name: 'chidi-image',
  inline: false,
  group: 'block',
  atom: true,

  addAttributes() {
    const attrs: FigureAttrs = {
      src: {
        default: '',
      },
      caption: {
        default: ''
      },
      alt: {
        default: ''
      },
      size: {
        default: 'standard'
      }
    };

    return attrs;
  },

  renderHTML() {
    return [
      'figure', {},
        ['img', { src: '', alt: '' }],
        ['figcaption', {}]
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageEditorNode);
  },

  addCommands() {
    return {
      setImage: (_opts) => ({ commands }) => {
        return commands.insertContent({
          type: this.name
        })
      }
    };
  }

});
