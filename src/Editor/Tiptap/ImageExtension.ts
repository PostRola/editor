import { Attribute, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import { ImageAttrs } from '../Type';
import { ImageEditorNode } from './ImageEditorNode';


export interface ImageOptions {}

type ExtensionAttrs = { [key in keyof ImageAttrs]: Partial<Attribute>; };

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    image: {
      setImage: (option: ImageAttrs) => ReturnType;
    }
  }
}

export const Image = Node.create<ImageOptions>({
  name: 'chidi-image',
  inline: false,
  group: 'block',
  atom: true,

  addAttributes() {
    const attrs: ExtensionAttrs = {
      src: {
        default: ''
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
        });
      }
    };
  }

});
