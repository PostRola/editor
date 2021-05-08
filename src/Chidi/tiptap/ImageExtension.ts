import { Node } from '@tiptap/core';
import { Command, ReactNodeViewRenderer } from '@tiptap/react';

import { ImageEditor } from './ImageEditor';
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
  content: 'inline*',
  // atom: true,

  addAttributes() {
    const attrs: FigureAttrs = {
      src: {
        default: null,
      },
      caption: {
        default: null
      },
      alt: {
        default: null
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
    return ReactNodeViewRenderer(ImageEditor);
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
