import { Attribute } from '@tiptap/core';

export type ImageSize = 'standard' | 'wide' | 'fullwidth';

export interface Figure {
  src: string;
  caption: string;
  alt: string;
  size: ImageSize;
}


export type FigureAttrs =
  { [key in keyof Figure]: Partial<Attribute>; };
