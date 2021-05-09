import { Attribute } from '@tiptap/core';

export interface Figure {
  src: string;
  caption?: string;
  alt?: string;
}

export type FigureAttrs =
  { [key in keyof Figure]: Partial<Attribute>; };
